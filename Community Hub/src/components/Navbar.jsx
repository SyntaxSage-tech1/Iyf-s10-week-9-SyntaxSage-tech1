import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CommunityHub</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;