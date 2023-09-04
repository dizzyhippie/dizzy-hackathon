function Navigation() {
  return (
    <nav>
      <ul className="main-nav">
        <li className="main-nav-item">
          <a href="/game-1" className="main-nav-link">
            Game 1
          </a>
        </li>
        <li className="main-nav-item">
          <a href="/game-2" className="main-nav-link">
            Game 2
          </a>
        </li>
        <li className="main-nav-item">
          <a href="/about" className="main-nav-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;