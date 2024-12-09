import { useEffect, useState } from "react";
import PostItem from "./components/PostItem";
import Post from "./models/post.interface";
import PostApiCall from "./apiCalls/postApiCall";
import CreatePostForm from "./components/CreatePostForm";

const PostApICall = new PostApiCall();

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  //  fetch posts
  const fetachPosts = async () => {
    const result: Post[] = await PostApICall.getAllPosts();
    setPosts(result);
  };

  // delete post
  const deletePost = async (postId: number) => {
    await PostApICall.removePosts(postId);
    setPosts(posts.filter((p) => p.id !== postId));
  };

  // add post 
  const addPost = async (newPost:Post)=>{
    const result:Post = await PostApICall.createPosts(newPost);
    setPosts([result,...posts])
  }

  useEffect(() => {
    fetachPosts();
  }, []);
  return (
    <>
      <div className="container my-4">
        <CreatePostForm addPost={addPost}/>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Post ID</th>
              <th>Post Title</th>
              <th>Post Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <PostItem deletePost = {deletePost} post={post} key={post.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
