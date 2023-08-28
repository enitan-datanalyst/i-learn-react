const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Favorite Blog</h1>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/popular">News</a>
                <a href="/create">Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;