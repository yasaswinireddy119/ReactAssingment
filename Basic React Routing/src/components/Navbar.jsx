import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <NavLink to="/home" style={linkStyle}>Home</NavLink>
      <NavLink to="/aboutus" style={linkStyle}>About Us</NavLink>
      <NavLink to="/todos" style={linkStyle}>Todos</NavLink>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  gap: "20px",
  padding: "12px",
  backgroundColor: "#222",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Navbar;
