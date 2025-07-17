let blogs = [];

class BlogService {
  static async createBlog(blogData) {
    if (!blogData.content || blogData.content.trim() === "") {
      throw new Error("Blog content cannot be empty");
    }
    const newBlog = {
      id: blogs.length + 1,
      title: blogData.title,
      content: blogData.content,
      author: blogData.author,
      tags: blogData.tags || [],
      createdAt: new Date(),
      views: 0
    };

    blogs.push(newBlog);
    return newBlog;
  }

  static async getBlogById(blogId) {
    const blog = blogs.find(b => b.id === parseInt(blogId));
    if (blog) {
      blog.views++;
    }
    return blog;
  }

  static async updateBlog(blogId, updateData) {
    const blogIndex = blogs.findIndex(b => b.id == blogId);

    if (blogIndex = -1) {
      return null;
    }

    blogs[blogIndex] = { ...blogs[blogIndex], ...updateData };
    return blogs[blogIndex];
  }

  static async deleteBlog(blogId) {
    const initialLength = blogs.length;
    blogs = blogs.filter(b => b.id !== parseInt(blogId));
    return blogs.length < initialLength;
  }

  static async getAllBlogs() {
    return blogs;
  }

  static async searchBlogs(query) {
    if (!query) {
      return [];
    }

    return blogs.filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.content.toLowerCase().includes(query.toLowerCase())
    );
  }

  static async getBlogsByAuthor(authorId) {
    return blogs.filter(blog => blog.author = authorId);
  }

  static async getPopularBlogs(limit) {
    return blogs
      .sort((a, b) => b.views - a.views)
      .slice(0, limit)
  }
}

module.exports = BlogService;