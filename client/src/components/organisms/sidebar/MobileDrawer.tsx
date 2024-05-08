import { Drawer } from "@mui/material";
import { SidebarProps } from "~/types/SidebarProps";
import DrawerContainer from "./DrawerContainer";

const MobileDrawer = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: SidebarProps) => {
  return (
    <Drawer
      variant="temporary" //temporary
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        height: "100%",
      }}
    >
      <DrawerContainer />
    </Drawer>
  );
};

export default MobileDrawer;
