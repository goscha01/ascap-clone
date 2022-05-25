import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://www.ascap.com">
        <img
          className="navbar-logo-small"
          alt="logo small"
          src="../../Assets/ASCAP_Note_Horizontal_Black.402e8647.png"
        />
        <img
          className="navbar-logo"
          alt="logo"
          src="/ASCAP_Logo_Horizontal_White.933d9b09.png"
        />
      </a>

      <h1>Membership Application</h1>
      <button className="navbar-button">Looking for help?</button>
    </nav>
  );
};

export default Navbar;
