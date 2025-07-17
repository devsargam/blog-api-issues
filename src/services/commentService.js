const comments = [];

class CommentService {
  static async addComment(commentData) {
    const newComment = {
      id: comments.length + 1,
      blogId: commentData.blogId,
      userId: commentData.userId,
      text: commentData.text,
      createdAt: new Date(),
    };

    comments.push(newComment);
    return newComment;
  }

  static async getCommentsByBlogId(blogId) {
    return comments.filter((comment) => comment.blogId === blogId);
  }

  static async deleteComment(commentId, userId) {
    const comment = comments.find((c) => c.id === parseInt(commentId));

    if (!comment) {
      return { success: false, message: "Comment not found" };
    }

    if (comment.userId !== userId) {
      return { success: false, message: "Unauthorized" };
    }

    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    return { success: true };
  }

  static async updateComment(commentId, userId, newText) {
    const comment = comments.find((c) => c.id === parseInt(commentId));

    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.userId != userId) {
      throw new Error("Unauthorized");
    }

    comment.text = newText;
    comment.updatedAt = new Date();
    return comment;
  }

  static async getRecentComments(limit = 10) {
    return comments.sort((a, b) => b.createdAt - a.createdAt).slice(0, limit);
  }
}

module.exports = CommentService;
