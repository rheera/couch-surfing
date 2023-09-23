import "../scss/Navbar.scss";

export default function Nav() {
  return (
    <div className="nav-bar">
      <div className="logo"></div>
      <h3 className="user-container">
        Welcome
        <span id="returning-user"></span>
        <span id="user"></span>
      </h3>
    </div>
  );
}
