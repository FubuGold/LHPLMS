import { Injectable, Dependencies } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

import { ResourceRepo } from '../../infra/repos/resource.repo';
import { PolicyRepo } from '../../infra/repos/policy.repo';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

import { USER_PATTERN } from '@app/contracts/user/user.pattern';


@Injectable()
@Dependencies('API_GATEWAY', ResourceRepo, PolicyRepo, HttpService)
export class Authorize {
  constructor(UserClient, ResourceRepo, PolicyRepo, HttpService) {
    this.UserClient = UserClient;
    this.ResourceRepo = ResourceRepo;
    this.PolicyRepo = PolicyRepo;
    this.HttpService = HttpService;
    this.actionMap = {
      GET: 'READ',
      POST: 'CREATE',
      PUT: 'UPDATE',
      PATCH: 'UPDATE',
      DELETE: 'DELETE',
    };
  }

  async authorize(req) {
    const requestedResourceId = req.params.id;

    //GET information about user who make the request
    const user = await this.UserClient.send(USER_PATTERN.GET_ONE, req.cookies); //<-not done

    // GET information about requested resource
    const resource =
      await this.ResourceRepo.getRequiredResource(requestedResourceId);

    //Map HTTP method to Action, see schema
    const action = this.actionMap[req.method];

    //Environment attribute is the request itself
    const environment = { ...req, requestTime: Date.now() };

    const policy = this.PolicyRepo.getPolicyApplied(resource, user, user.group)

    const conditionEvaluation = policy.rule.reduce(
      async (condition, curr) => curr && (await firstValueFrom(
        this.HttpService.post(`${process.env['OPA_URL']}/v1/data/${condition.conditionName}/allow`, {
          input: {
            subject: user,
            resource: resource,
            environment: environment
          }
        })).result === 'true') && condition.effect,
      true

    );
  }
}
