import React from "react";
import { useParams } from "react-router-dom";

const Capacity = () => {
  const { projectName } = useParams();
  return <div>Capacity {projectName}</div>;
};

export default Capacity;
