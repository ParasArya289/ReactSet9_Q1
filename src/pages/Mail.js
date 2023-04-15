import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/Card";
import { DataContext } from "../context/dataContext";

export const Mail = () => {
  const { data } = useContext(DataContext);
  const { mailId } = useParams();
  const findMail = data.find(({ id }) => id === +mailId);
  return (
    <>
      <h1>This is Mail {mailId}</h1>
      <Card data={findMail} />
    </>
  );
};
