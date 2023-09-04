function Navigation() {
  return (
    <section className="container main-header-container">
      <div className="main-header-logo">
        <h3>Logo Here</h3>
      </div>
      <nav>
        <ul className="main-nav">
          <li className="main-nav-item">
            <a href="/games" className="main-nav-link">
              Games
            </a>
          </li>
          <li className="main-nav-item">
            <a href="/about" className="main-nav-link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navigation;
