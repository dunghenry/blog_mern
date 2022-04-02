import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) =>{
    try {
        const posts = await PostModel.find();
        console.log('post', posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const createPost = async (req, res) =>{
   try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatedPost = req.body;
        const post = await PostModel.findOneAndUpdate({_id: updatedPost._id}, updatedPost, {new: true});
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}