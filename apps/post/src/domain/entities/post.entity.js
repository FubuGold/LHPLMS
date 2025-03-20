export class Post {
    constructor({ id, title, content, ownerId, createAt }) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.ownerId = ownerId;
        this.createAt = createAt;
        Object.freeze(this);
    }

    updateTitle(title) {
        return new Post({ ...this, title: title });
    }

    updateContent(content) {
        return new Post({ ...this, content: content });
    }

    updateOwnerId(ownerId) {
        return new Post({ ...this, ownerId: ownerId });
    }

    updateCreateAt(createAt) {
        return new Post({ ...this, createAt: createAt });
    }
}
