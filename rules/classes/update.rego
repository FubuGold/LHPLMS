package authz.classes.update

import data.common.allow_action
import data.common.is_author

default allow = false

allow if {
    
}

allow if {
    is_author(input.user)
}