import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextAdForm from "./TextAdForm";
import MediaAdForm from "./MediaAdForm";

const Form = () => {
  const { selectedCard } = useParams();
  return <div>{selectedCard === "0" ? <TextAdForm /> : <MediaAdForm />}</div>;
};

export default Form;
