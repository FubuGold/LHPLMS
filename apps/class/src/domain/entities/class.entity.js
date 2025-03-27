export class Class {
    constructor(obj) {
        const { id, name, subjectId, ownerId, createAt, backgroundImage, UserClass, ClassPost, ClassAssignment } = obj ?? {};
        this.id = id;
        this.name = name;
        this.subjectId = subjectId;
        this.ownerId = ownerId;
        this.createAt = createAt;
        this.backgroundImage = backgroundImage;
        this.UserClass = UserClass;
        this.ClassPost = ClassPost;
        this.ClassAssignment = ClassAssignment;
        Object.freeze(this);
    }
}