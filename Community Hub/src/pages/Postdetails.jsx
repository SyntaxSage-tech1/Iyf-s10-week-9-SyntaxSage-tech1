import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div className="page">
      <h1>{post.title}</h1>

      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;