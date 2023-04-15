import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export const CardWithButton = ({ data }) => {
  const { toggleReadUnread } = useContext(DataContext);
  const mailStyle = (done) => (done ? "3px dotted lightgrey" : "3px dotted");
  return (
    <div
      style={{
        minWidth: "450px",
        border: mailStyle(data?.read),
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <h1>{data?.subject}</h1>
      <p>
        <i>From: {data?.sender}</i>
      </p>
      <NavLink
        style={{
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          backgroundColor: "black",
          padding: "0.9rem"
        }}
        to={`/mail/${data?.id}`}
      >
        open
      </NavLink>
      <button
        onClick={() => toggleReadUnread(data?.id)}
        style={{
          color: "white",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "black",
          padding: "1rem",
          margin: "12px",
          cursor: "pointer"
        }}
      >
        {data?.read ? "Marks as unread" : "Mark as read"}
      </button>
    </div>
  );
};
