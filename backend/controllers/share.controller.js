// const shareService = require("../services/share.service");

// // Controller to create a new post
// exports.createPost = async (req, res) => {
//   try {
//     const newPost = await shareService.createPost(req.body); // Call the service to handle business logic
//     res.status(201).json({ success: true, data: newPost, message: "Post created successfully" });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };

// // Controller to get all posts
// exports.getAllPosts = async (req, res) => {
//   try {
//     const posts = await shareService.getAllPosts(); // Fetch all posts using the service
//     res.status(200).json({ success: true, data: posts });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };

// // Controller to get a single post by ID
// exports.getPostById = async (req, res) => {
//   try {
//     const post = await shareService.getPostById(req.params.id); // Fetch specific post by ID
//     res.status(200).json({ success: true, data: post });
//   } catch (err) {
//     res.status(404).json({ success: false, error: err.message });
//   }
// };

// // Controller to update a post by ID
// exports.updatePost = async (req, res) => {
//   try {
//     const updatedPost = await shareService.updatePost(req.params.id, req.body); // Update post with new data
//     res.status(200).json({ success: true, data: updatedPost, message: "Post updated successfully" });
//   } catch (err) {
//     res.status(404).json({ success: false, error: err.message });
//   }
// };

// // Controller to delete a post by ID
// exports.deletePost = async (req, res) => {
//   try {
//     const deletedPost = await shareService.deletePost(req.params.id); // Delete post by ID
//     res.status(200).json({ success: true, data: deletedPost, message: "Post deleted successfully" });
//   } catch (err) {
//     res.status(404).json({ success: false, error: err.message });
//   }
// };
