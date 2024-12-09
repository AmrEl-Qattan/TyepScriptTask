import axios from "axios";
import Post from "../models/post.interface";

class PostApiCall {
    async getAllPosts() : Promise<Post[]>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return data;
    }

    async createPosts(newPost:Post) : Promise<Post>{
        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts",newPost)
        return data;
    }

    async removePosts(postId:number) : Promise<void>{
         await axios.delete("https://jsonplaceholder.typicode.com/posts/" + postId)
    }
}

export default PostApiCall