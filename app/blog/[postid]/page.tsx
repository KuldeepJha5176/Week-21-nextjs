import axios from "axios";

export default async function BlogPost({params}: Readonly<{ params: { postid: string; }; }>) {
    const postId = ( await params).postid;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.data;
  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p> Body -{data.body}</p>
      <p> Title -{data.title}</p>
    </div>
  );
}