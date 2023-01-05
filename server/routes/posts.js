import express from "express";

import {
  getPosts,
  getPostsBySearch,
  getPostsByCreator,
  getPost,
  createPost,
  updatePost,
  commentPost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/creator", getPostsByCreator);
router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id/commentPost", commentPost);

export default router;
