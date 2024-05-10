import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BasicTable2 from "~/components/organisms/table/BacklogEjemplo";
import BasicTable3 from "~/components/organisms/table/CapacityEjemplo";

const Sprints = () => {
  const { projectName } = useParams();
  const [tabValue, setTabValue] = useState<string>("projectsTab");

  const handleTabChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const changeTabValue =
      (e.target as HTMLDivElement).getAttribute("id") ?? "projects";
    setTabValue(changeTabValue);
  };

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
          <Box display={"flex"} gap={"8px"}>
            <Box display={"flex"} flexDirection={"column"} textAlign={"right"}>
              <Typography>1 de Mayo - 14 de Mayo</Typography>
              <Typography>10 work days</Typography>
            </Box>
            {/* <Button variant="contained">Invite</Button>{" "} */}
          </Box>
        </Box>
      </Box>

      <Divider />

      <Grid item xs={12} md={12} marginBottom={"32px"}>
        <Grid container direction="row" justifyContent="start">
          <Box
            sx={{
              width: "100%",
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <Tabs
              onChange={handleTabChange}
              value={tabValue}
              aria-label="lab API tabs example"
              textColor="primary"
              id="tabContainer"
              indicatorColor="primary"
              sx={{
                padding: "0",
                fontFamily: "inherit",
                alignItems: "center",
                display: "flex",

                "& .MuiTabs-flexContainer": {
                  gap: "16px",
                },
                "& .MuiButtonBase-root": {
                  minWidth: 0,
                  fontSize: "12px",
                  // width: "fit-content",
                },
              }}
            >
              <Tab
                sx={{
                  fontFamily: "inherit",
                  padding: "0",
                  textTransform: "none",
                }}
                label={`Taskboard`}
                value="projectsTab"
                id="projectsTab"
              />
              <Tab
                sx={{
                  fontFamily: "inherit",
                  padding: "0",
                  textTransform: "none",
                }}
                label={`Backlog`}
                value="1"
                id="1"
              />
              <Tab
                sx={{
                  fontFamily: "inherit",
                  padding: "0",
                  textTransform: "none",
                }}
                label={`Capacity`}
                value="2"
                id="2"
              />
              <Tab
                sx={{
                  fontFamily: "inherit",
                  padding: "0",
                  textTransform: "none",
                }}
                label={`Sprint Goal`}
                value="3"
                id="3"
              />

              <Divider orientation="vertical" flexItem />

              <Button
                variant="text"
                sx={{
                  display:
                    tabValue == "1" || tabValue == "projectsTab" ? "" : "none",
                  textTransform: "capitalize",
                }}
              >
                Column Options
              </Button>
              <Button
                variant="text"
                sx={{
                  display: tabValue == "2" ? "" : "none",
                  textTransform: "capitalize",
                }}
              >
                Add User
              </Button>
            </Tabs>

            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Select
                value={1}
                onChange={() => console.log()}
                sx={{
                  height: "18px",
                  fontSize: "12px",
                  display:
                    tabValue == "projectsTab" || tabValue == "2" ? "" : "none",
                }}
              >
                <MenuItem value={1}>Sprint 1</MenuItem>
                <MenuItem value={2}>Sprint 2</MenuItem>
              </Select>

              <Divider orientation="vertical" flexItem />

              <Select
                value={1}
                onChange={() => console.log()}
                sx={{
                  height: "18px",
                  fontSize: "12px",
                  display: tabValue == "projectsTab" ? "" : "none",
                }}
              >
                <MenuItem value={1}>Person: All</MenuItem>
                <MenuItem value={2}>@Me</MenuItem>
                <MenuItem value={3}>Jonathan</MenuItem>
              </Select>
              <Select
                value={1}
                onChange={() => console.log()}
                sx={{
                  height: "18px",
                  fontSize: "12px",
                  display: tabValue == "2" ? "" : "none",
                }}
              >
                <MenuItem value={1}>Team: Chana</MenuItem>
                <MenuItem value={2}>Juana</MenuItem>
              </Select>
            </Box>
          </Box>
        </Grid>

        <TabPanel value={tabValue} index={"projectsTab"}>
          Big Kanban Board Here
        </TabPanel>
        <TabPanel value={tabValue} index={"1"}>
          Dense collapsed Table Here with tickets and tasks
          <BasicTable2 />
        </TabPanel>

        <TabPanel value={tabValue} index={"2"}>
          <BasicTable3 />
        </TabPanel>
        <TabPanel value={tabValue} index={"3"}>
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"stretch"}
            justifyContent={"space-between"}
            width="100%"
            height={"100%"}
          >
            <Box>
              <TextField
                id="filled-required"
                label="Goal for this sprint"
                defaultValue=""
                variant="outlined"
              />
            </Box>
            <Box>
              <FormControlLabel control={<Switch />} label="Goal achieved?" />
            </Box>

            <Box>
              <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                variant="outlined"
              />
            </Box>
            <Box
              gap={"8px"}
              flex={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              width={"100%"}
            >
              <Button variant="contained" sx={{ width: "120px" }}>
                Save
              </Button>
              <Button variant="outlined" sx={{ width: "120px" }}>
                Cancel
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </Grid>
    </Box>
  );
};

export default Sprints;

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: string;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}
