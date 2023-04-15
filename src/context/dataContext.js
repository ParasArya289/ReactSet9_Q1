import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../utils/utils";

export const DataContext = createContext();

export const DataContextProvder = ({ children }) => {
  const [data, setData] = useState([]);
  const [sentData, setSentData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/allemails");
        const {
          data: { emails, sentEmails }
        } = res;
        setData(emails);
        setSentData(sentEmails);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);

  const toggleReadUnread = (ID) => {
    const newData = data.map((el) =>
      el.id === ID ? { ...el, read: !el.read } : el
    );
    setData(newData);
  };

  const read = data.filter(({ read }) => read === true);
  const unread = data.filter(({ read }) => read === false);

  return (
    <DataContext.Provider
      value={{ data, sentData, read, unread, toggleReadUnread }}
    >
      {children}
    </DataContext.Provider>
  );
};
