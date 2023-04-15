import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Inbox } from "./pages/Inbox";
import { MailBox } from "./pages/MailBox";
import { Sent } from "./pages/Sent";
import { Mail } from "./pages/Mail";
export default function App() {
  const navStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline 3px" : "none",
      textUnderlineOffset: isActive ? "20px" : "none",
      color: isActive ? "grey" : "white",
      padding: "6px"
    };
  };
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "6px"
        }}
      >
        <NavLink style={navStyle} to="/">
          Gmail
        </NavLink>
        <NavLink style={navStyle} to="/inbox">
          Inbox
        </NavLink>
        <NavLink style={navStyle} to="/sent">
          Sent
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MailBox />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/mail/:mailId" element={<Mail />} />
      </Routes>
    </div>
  );
}
