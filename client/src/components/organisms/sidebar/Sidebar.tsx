import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { SidebarProps } from "~/types/SidebarProps";
import MenuDense from "~/components/atoms/menuDense/MenuDense";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { MenuData } from "~/dummyData/menuData.js";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = ({
  drawerWidth = 240,
  sidebarOpen,
  handleDrawerToggle,
}: SidebarProps) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        zIndex: 1,
        flexShrink: 0,
        whiteSpace: "nowrap",
        alignItems: "center",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          overflowX: "hidden",
        },
      }}
      variant="permanent"
      anchor="left"
      open={sidebarOpen}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "48px",
          padding: "20px 0",
        }}
      >
        <Typography display={sidebarOpen ? "" : "none"}>
          Nombre del Proyecto
        </Typography>
      </DrawerHeader>

      <Divider />

      <MenuDense menus={MenuData} />

      <DrawerHeader
        onClick={() => console.log()}
        sx={{ flexDirection: sidebarOpen ? "row" : "column" }}
      >
        <Button
          type="button"
          sx={{
            color: "black",
            fontSize: "10px",
            gap: "10px",
          }}
        >
          <SettingsIcon />
          <Typography display={sidebarOpen ? "" : "none"} fontSize={"inherit"}>
            Organization Settings
          </Typography>
        </Button>

        <IconButton
          sx={{ ":focus": { outline: "none" } }}
          onClick={handleDrawerToggle}
        >
          {sidebarOpen ? (
            <KeyboardDoubleArrowLeftIcon />
          ) : (
            <KeyboardDoubleArrowRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
    </Drawer>
  );
};

export default Sidebar;
