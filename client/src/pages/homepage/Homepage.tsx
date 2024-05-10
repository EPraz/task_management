import { Box, Grid, Paper, Tab, Tabs, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BasicTable from "~/components/organisms/table/RandomTable";

const Homepage = () => {
  const { groupName } = useParams();
  const [tabValue, setTabValue] = useState<string>("projectsTab");

  const handleTabChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const changeTabValue =
      (e.target as HTMLDivElement).getAttribute("id") ?? "projects";
    setTabValue(changeTabValue);
  };

  const currentPath = window.location.pathname;

  return (
    <Box columnGap={2} minHeight={"100vh"} width={"100%"}>
      <h1 style={{ fontSize: "21px" }}>{groupName}</h1>
      <Grid item xs={12} md={12} marginBottom={"32px"}>
        <Grid container direction="row" justifyContent="start">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                fontSize: "14px",
                "& .MuiTabs-flexContainer": {
                  gap: "16px",
                },
                "& .MuiButtonBase-root": {
                  minHeight: "50px",
                  minWidth: 0,
                },
              }}
            >
              <Tab
                sx={{
                  fontFamily: "inherit",
                  padding: "0",
                  textTransform: "none",
                }}
                label={`Projects`}
                value="projectsTab"
                id="projectsTab"
              />
              <Tab
                sx={{
                  padding: "0 8px",
                  textTransform: "none",
                  fontFamily: "inherit",
                }}
                label="My work items"
                value="workItemsTab"
                id="workItemsTab"
              />
            </Tabs>
          </Box>
        </Grid>
      </Grid>

      <TabPanel value={tabValue} index={"projectsTab"}>
        <Box
          display={"flex"}
          minHeight={"100%"}
          border={"1px solid red"}
          padding={0}
          columnGap={"32px"}
          rowGap={"16px"}
          justifyContent={"space-between"}
          sx={{
            "& .MuiGrid-item": {
              padding: 0,
            },
          }}
        >
          <Grid item flexWrap={"wrap"} padding={0} gap={2}>
            <a
              href={`${currentPath}/${"project_1"}/overview`}
              style={{ textDecoration: "none" }}
            >
              <Paper
                sx={{
                  padding: "20px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  flexGrow: 1,
                  width: "100%",
                  minHeight: "100px",
                  minWidth: "275px",
                  // height: "100%",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid black",
                    gap: "20px",
                  }}
                >
                  <Box
                    height={48}
                    width={48}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    border={"1px solid black"}
                  >
                    P{groupName?.includes("_a") ? "1" : "2"}
                  </Box>
                  <Box flex={1} flexDirection={"column"}>
                    <Typography
                      textAlign={"left"}
                      variant="h5"
                      fontWeight={"semi-bold"}
                      fontSize={"16px"}
                    >
                      Proyecto {groupName?.includes("_a") ? "1" : "2"}
                    </Typography>
                    <Typography
                      textAlign={"left"}
                      variant="body1"
                      fontSize={"14px"}
                    >
                      Descripcion del proyecto
                    </Typography>
                  </Box>
                </Box>
                <Box width={"100%"} border={"1px solid blue"}>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <li>
                      {" "}
                      <a
                        href={`${currentPath}/${"project_1"}/board/sprints`}
                        style={{
                          textTransform: "none",
                          textDecoration: "none",
                          color: "#000",
                          display: "inline-block",
                        }}
                      >
                        Sprints
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${currentPath}/${"project_1"}/board/backlog`}
                        style={{
                          textTransform: "none",
                          textDecoration: "none",
                          color: "#000",
                          display: "inline-block",
                        }}
                      >
                        Backlog
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${currentPath}/${"project_1"}/board/capacity`}
                        style={{
                          textTransform: "none",
                          textDecoration: "none",
                          color: "#000",
                          display: "inline-block",
                        }}
                      >
                        Capacity
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${currentPath}/${"project_1"}/board/sprint_goal`}
                        style={{
                          textTransform: "none",
                          textDecoration: "none",
                          color: "#000",
                          display: "inline-block",
                        }}
                      >
                        Sprint Goal
                      </a>
                    </li>
                  </ul>
                </Box>
              </Paper>
            </a>
          </Grid>
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={"workItemsTab"}>
        <BasicTable />
      </TabPanel>
    </Box>
  );
};

export default Homepage;

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
