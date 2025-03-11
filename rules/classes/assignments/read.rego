package authz.assignments.read

import data.common.allow_action
import data.class.can_access
default allow = false

allow if {
    input.resource.is_test == false
    allow_action(input.action)
    can_access(input.user)
}

allow if {
    input.resource.is_test == true
    input.resource.startTime <= input.environment.requestTime
    input.resource.endTime >= input.environment.requestTime
}