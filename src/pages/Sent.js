import { useContext } from "react";
import { Card } from "../component/Card";
import { DataContext } from "../context/dataContext";

export const Sent = () => {
  const { sentData } = useContext(DataContext);
  return (
    <>
      {sentData?.map((el) => (
        <Card data={el} />
      ))}
    </>
  );
};
