import { NavLink } from "react-router-dom";
export const MailBox = () => {
  return (
    <>
      <div
        style={{
          minWidth: "450px",
          border: "2px dotted",
          margin: "2rem",
          borderRadius: "12px",
          minHeight: "150px"
        }}
      >
        <h1 style={{ marginBottom: "2.5rem" }}>My MailBox</h1>
        <NavLink
          style={{
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            backgroundColor: "black",
            marginRight: "20px",
            padding: "0.9rem"
          }}
          to="/inbox"
        >
          Inbox
        </NavLink>
        <NavLink
          style={{
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            backgroundColor: "black",
            padding: "0.9rem"
          }}
          to="/sent"
        >
          Sent
        </NavLink>
      </div>
    </>
  );
};
