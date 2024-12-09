import { useState } from "react";
import Post from "../models/post.interface";


interface CreatePostFormProps{
    addPost:(newPost : Post) =>void;
}
export default function CreatePostForm({addPost} : CreatePostFormProps) {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const formSumbitHandler = (e:React.FormEvent)=>{
    e.preventDefault();
    addPost({title , body , userId:202, id:101})
    
  }

  return (
    <>
      <form onSubmit={formSumbitHandler}>
        <div className="mb-3 d-flex align-items-center justify-content-between gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 d-flex align-items-center justify-content-between gap-3">
          <input
           type="text" 
           className="form-control" 
           placeholder="Post Body" 
           value={body}
           onChange={(e) => setBody(e.target.value)}
           />
        </div>
        <button type="submit" className="btn btn-dark btn-lg w-100">
          Add Post
        </button>
      </form>
    </>
  );
}