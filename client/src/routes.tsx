import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Overview from "./pages/overview/Overview";
import Board from "./pages/boards/Board";
import Backlog from "./pages/boards/backlog/Backlog";
import SprintGoal from "./pages/boards/sprintGoal/SprintGoal";
import Capacity from "./pages/boards/capacity/Capacity";
import Sprints from "./pages/boards/sprints/Sprints";
import Retrospective from "./pages/boards/retrospective/Retrospective";

export const RouteList = [
  { path: "/:groupName", component: <Homepage /> },

  { path: "/:groupName/:projectName/overview", component: <Overview /> },

  { path: "/:groupName/:projectName/board", component: <Board /> },
  {
    path: "/:groupName/:projectName/board/sprints",
    component: <Sprints />,
  },
  { path: "/:groupName/:projectName/board/backlog", component: <Backlog /> },
  // { path: "/:groupName/:projectName/board/capacity", component: <Capacity /> },

  // {
  //   path: "/:groupName/:projectName/board/sprint_goal",
  //   component: <SprintGoal />,
  // },
  {
    path: "/:groupName/:projectName/board/retrospective",
    component: <Retrospective />,
  },
];
