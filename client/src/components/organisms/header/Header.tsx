import { AppBar, Toolbar } from "@mui/material";
import HeaderSidebar from "./HeaderSidebar";
import LogoComponent from "../../atoms/logoComponent/LogoComponent";

const Header = () => {
  return (
    <AppBar elevation={4} position="fixed">
      <Toolbar
        sx={{
          background: "#fff",
          color: "#262637",
          flexWrap: "wrap",
          minHeight: "0 !important",
          padding: "0 16px !important",
        }}
      >
        <LogoComponent />
        <HeaderSidebar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
