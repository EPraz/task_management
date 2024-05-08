import { Drawer, Toolbar } from "@mui/material";
import { SidebarProps } from "~/types/SidebarProps";
import DrawerContainer from "./DrawerContainer";

const DesktopDrawer = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: SidebarProps) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={mobileOpen}
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        height: "100%",
      }}
    >
      <DrawerContainer handleDrawerToggle={handleDrawerToggle} />
    </Drawer>
  );
};

export default DesktopDrawer;
