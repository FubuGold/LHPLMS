export class SubmissionAnswer {
    constructor(obj) {
        obj = obj ?? {};
        this.id = obj.id;
        this.submissionId = obj.id;
        this.questionId = obj.questionId;
        this.answers = obj.answers;
    }
}