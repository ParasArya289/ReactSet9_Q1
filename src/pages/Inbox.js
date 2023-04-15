import { useContext } from "react";
import { Card } from "../component/Card";
import { CardWithButton } from "../component/cardWithButton";
import { DataContext } from "../context/dataContext";

export const Inbox = () => {
  const { data, read, unread } = useContext(DataContext);
  // {
  //   id: 2,
  //   sender: 'Jane Smith',
  //   subject: 'Meeting',
  //   message: 'Reminder of our meeting tomorrow at 2pm.',
  //   read: true,
  // },
  return (
    <>
      <h1>Inbox</h1>
      {!unread.length && <h4>No Unread Emails</h4>}
      {unread.length > 0 && (
        <h4>
          Read: {read.length} Unread: {unread.length}
        </h4>
      )}
      {data.map((el) => {
        return <CardWithButton data={el} />;
      })}
    </>
  );
};
