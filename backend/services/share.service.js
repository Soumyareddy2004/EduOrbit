// const Share = require("../models/share.model");

// // Service to create a new post
// exports.createPost = async (postData) => {
//   try {
//     const newPost = new Share(postData);
//     const savedPost = await newPost.save();
//     return savedPost;
//   } catch (err) {
//     throw new Error(`Error creating post: ${err.message}`);
//   }
// };

// // Service to get all posts
// exports.getAllPosts = async () => {
//   try {
//     const posts = await Share.find();
//     return posts;
//   } catch (err) {
//     throw new Error(`Error fetching posts: ${err.message}`);
//   }
// };

// // Service to get a single post by ID
// exports.getPostById = async (postId) => {
//   try {
//     const post = await Share.findById(postId);
//     if (!post) {
//       throw new Error("Post not found");
//     }
//     return post;
//   } catch (err) {
//     throw new Error(`Error fetching post: ${err.message}`);
//   }
// };

// // Service to update a post by ID
// exports.updatePost = async (postId, updatedData) => {
//   try {
//     const updatedPost = await Share.findByIdAndUpdate(postId, updatedData, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedPost) {
//       throw new Error("Post not found for update");
//     }
//     return updatedPost;
//   } catch (err) {
//     throw new Error(`Error updating post: ${err.message}`);
//   }
// };

// // Service to delete a post by ID
// exports.deletePost = async (postId) => {
//   try {
//     const deletedPost = await Share.findByIdAndDelete(postId);
//     if (!deletedPost) {
//       throw new Error("Post not found for deletion");
//     }
//     return deletedPost;
//   } catch (err) {
//     throw new Error(`Error deleting post: ${err.message}`);
//   }
// };
