import "../scss/Navbar.scss";

export default function Nav(props: { name: string; isReturning: boolean }) {
  return (
    <div className="nav-bar">
      <div className="logo"></div>
      <h3 className="user-container">
        Welcome
        <span id="user">
          {props.isReturning && " back"} {props.name}
        </span>
      </h3>
    </div>
  );
}
