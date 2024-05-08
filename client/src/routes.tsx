import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Overview from "./pages/overview/Overview";
import Boards from "./pages/boards/Boards";
import Taskboard from "./pages/boards/taskboard/Taskboard";
import Backlog from "./pages/boards/backlog/Backlog";
import SprintGoal from "./pages/boards/sprintGoal/SprintGoal";
import Capacity from "./pages/boards/capacity/Capacity";

export const RouteList = [
  { path: "/", component: <Homepage /> },

  { path: "/overview", component: <Overview /> },

  { path: "/boards", component: <Boards /> },
  { path: "boards/taskboard", component: <Taskboard /> },
  { path: "boards/backlog", component: <Backlog /> },
  { path: "boards/capacity", component: <Capacity /> },
  { path: "boards/sprint_goal", component: <SprintGoal /> },
];
