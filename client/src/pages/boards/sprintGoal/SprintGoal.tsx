import React from "react";
import { useParams } from "react-router-dom";

const SprintGoal = () => {
  const { projectName } = useParams();

  return <div>SprintGoal {projectName}</div>;
};

export default SprintGoal;
