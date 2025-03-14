export class Resource {
  constructor(
    id,
    ownerId,
    Class,
    ClassPost,
    Assignment,
    QuestionBank,
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.Class = Class;
    this.ClassPost = ClassPost;
    this.Assignment = Assignment;
    this.QuestionBank = QuestionBank;

    Object.freeze(this);
  }
}
