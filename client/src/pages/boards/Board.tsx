import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import BasicTable from "~/components/organisms/table/RandomTable";

const Board = () => {
  const { projectName } = useParams();

  return (
    <Box width={"100%"} minHeight={"100vh"} paddingTop={2.5}>
      <Typography>Work Items</Typography>
      <BasicTable />
    </Box>
  );
};

export default Board;
