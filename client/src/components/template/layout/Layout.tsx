import React, { HTMLProps, useEffect } from "react";
import { StyledBodyWrapper, StyledWrapper } from "./styles";
import Header from "~/components/organisms/header/Header";
import Sidebar from "~/components/organisms/sidebar/Sidebar";

const Layout = ({ children }: HTMLProps<HTMLDivElement>) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [drawerWidth, setDrawerWitdh] = React.useState(240);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setDrawerWitdh(sidebarOpen ? 240 : 50);
  }, [sidebarOpen]);

  return (
    <StyledWrapper>
      {/* <CssBaseline /> */}

      <Header />

      <Sidebar
        drawerWidth={drawerWidth}
        sidebarOpen={sidebarOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <StyledBodyWrapper>{children}</StyledBodyWrapper>
    </StyledWrapper>
  );
};

export default Layout;
