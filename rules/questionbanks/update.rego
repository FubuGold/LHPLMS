package authz.questionbanks.update

import data.common.is_author
import data.common.allow_action

default allow = false

allow if {
    allow_action(input.action)
}

allow if {
    is_author(input.user)
}