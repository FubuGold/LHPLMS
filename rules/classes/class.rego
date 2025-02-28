package class

can_access(user) = true if {
    classUser := input.resource.Class.UserClass[_]
    user == classUser
}