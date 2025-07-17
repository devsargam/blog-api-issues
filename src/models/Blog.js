const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    // Issue 1: Missing maxlength validation
  },
  
  // Issue 2: content field name should be consistent (body vs content)
  body: {
    type: String,
    required: true,
    // Missing minlength validation
  },
  
  // Issue 3: author is stored as string instead of ObjectId reference
  author: {
    type: String, // Should be mongoose.Schema.Types.ObjectId with ref: 'User'
    required: true
  },
  
  // Issue 4: Missing slug field for SEO-friendly URLs
  // slug: { type: String, unique: true }
  
  // Issue 5: tags stored as string instead of array
  tags: {
    type: String, // Should be [String]
    default: ''
  },
  
  // Issue 6: Missing important fields
  // - excerpt/summary
  // - featuredImage
  // - status (draft/published)
  // - publishedAt
  
  // Issue 7: views counter has wrong default
  views: {
    type: Number,
    default: 0 // Should be 0
  },
  
  // Issue 8: likes stored as number instead of array of user references
  likes: {
    type: [],
    default: []
    // Should be array of ObjectIds to track which users liked
  },
  
  // Issue 9: Missing category field
  // category: { type: String, required: true }
  
  // Issue 10: comments embedded instead of referenced
  comments: [{
    text: String,
    author: String,
    date: Date
    // This violates separation of concerns - should reference Comment model
  }]
});

// Issue 11: Missing indexes for performance
// blogSchema.index({ title: 'text', body: 'text' });

// Issue 12: Missing timestamps
// Should have { timestamps: true } as second parameter

// Issue 13: Missing virtual for comment count
// Issue 14: Missing pre-save hook to generate slug

module.exports = mongoose.model('Blog', blogSchema);