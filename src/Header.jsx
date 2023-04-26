import { NavLink } from "react-router-dom";
const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
    fontSize: "30px",
    textDecoration: "none",
  });
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyleType: "none",
        }}
      >
        <li>
          <NavLink to="/" style={getActiveStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/video" style={getActiveStyle}>
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink to="/likevideo" style={getActiveStyle}>
            LikeVideo
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlater" style={getActiveStyle}>
            WatchLater
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
