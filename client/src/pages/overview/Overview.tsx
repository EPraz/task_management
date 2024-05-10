import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const Overview = () => {
  const { projectName } = useParams();

  return (
    <Box
      paddingTop={2.5}
      flex={1}
      flexDirection={"column"}
      minHeight={"100vh"}
      width={"100%"}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Box
          height={48}
          width={48}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {projectName?.split("_")[0].charAt(0).toUpperCase()}
          {projectName?.split("_")[1].charAt(0).toUpperCase()}
        </Box>
        <Box
          flex={1}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <h1 style={{ fontSize: "21px" }}>{projectName}</h1>
          <Button variant="contained">Invite</Button>{" "}
        </Box>
      </Box>

      <Divider />
      <Box>
        <Paper
          sx={{
            marginTop: "32px",
            padding: "20px",
            borderRadius: "4px",
            overflow: "hidden",
            flexGrow: 1,
            // width: "100%",
            // minHeight: "100px",
            // minWidth: "275px",
            // height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box flex={1}>
            <Box
              flex={1}
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"row"}
              alignItems={"center"}
              marginBottom={"32px"}
            >
              <Typography variant="body1" width={"fit-content"}>
                Project Stats
              </Typography>
              <Select
                value={1}
                onChange={() => console.log()}
                inputProps={{ "aria-label": "Without label" }}
                sx={{ fontSize: "12px" }}
              >
                <MenuItem value={1}>Period: Last 7 days</MenuItem>
                <MenuItem value={10}>Last Month</MenuItem>
                <MenuItem value={20}>Last 6 Months</MenuItem>
                <MenuItem value={30}>last Year</MenuItem>
              </Select>
            </Box>
            <Box>
              <Typography>Board</Typography>
              <Typography>Work Items created - 0</Typography>
              <Typography>Work Items completed - 0</Typography>
              <Typography>Work Items in progress - 0</Typography>
              <Typography>Work Items blocked - 0</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Overview;
