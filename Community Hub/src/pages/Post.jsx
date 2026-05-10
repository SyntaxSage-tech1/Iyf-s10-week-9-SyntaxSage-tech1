import useFetch from "../hooks/useFetch";
import PostCard from "../components/PostCard";

function Posts() {
  const { data: posts, loading } = useFetch(
    "http://localhost:5000/posts"
  );

  return (
    <div className="page">
      <h1>Community Posts</h1>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;