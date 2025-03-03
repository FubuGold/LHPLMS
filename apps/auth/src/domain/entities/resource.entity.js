export class Resource {
  constructor(
    id,
    ownerId,
    PolicyResource,
    Class,
    ClassPost,
    Assignment,
    QuestionBank,
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.PolicyResource = PolicyResource;
    this.Class = Class;
    this.ClassPost = ClassPost;
    this.Assignment = Assignment;
    this.QuestionBank = QuestionBank;

    Object.freeze(this);
  }
}
