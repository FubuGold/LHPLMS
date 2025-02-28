import { Injectable, Dependencies } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { ResourceRepo } from '../../infra/repos/resource.repo';
import { PolicyRepo } from '../../infra/repos/policy.repo';
import { MessageService } from '../../infra/messages/message.service';

@Injectable
@Dependencies(ResourceRepo, PolicyRepo, MessageService, HttpService)
export class Authorize {
  constructor(ResourceRepo, PolicyRepo, MessageService, HttpService) {
    this.ResourceRepo = ResourceRepo;
    this.PolicyRepo = PolicyRepo;
    this.MessageService = MessageService;
    this.HttpService = HttpService;
    this.actionMap = {
      GET: 'READ',
      POST: 'CREATE',
      PUT: 'UPDATE',
      PATCH: 'UPDATE',
      DELETE: 'DELETE',
    };
  }

  async authorize(req, user) {
    const requestedResourceId = req.params.id;

    //GET information about user who make the request
    const user = await this.MessageService.message(
      'userService.getUserInfo',
      user,
    );

    // GET information about requested resource
    const resource =
      await this.ResourceRepo.getRequiredResource(requestedResourceId);

    //GET policy applied to the resource
    const policy = await this.PolicyRepo.getPoliciesApplied(resource);

    //Map HTTP method to Action, see schema
    const action = this.actionMap[req.method];

    //Environment attribute is the request itself
    const environment = req;

    return await firstValueFrom(
      this.HttpService.post(
        `${process.env.OPA_URL}/v1/data/${policy.name}.${action}/allow`,
        {
          input: {
            subject: user,
            resource: resource,
            action: action,
            policy: policy,
            environment: environment,
          },
        },
      ),
    ).result;
  }
}
