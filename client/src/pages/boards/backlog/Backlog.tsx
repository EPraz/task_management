import React from "react";
import { useParams } from "react-router-dom";

const Backlog = () => {
  const { projectName } = useParams();

  return <div>Backlog {projectName}</div>;
};

export default Backlog;
