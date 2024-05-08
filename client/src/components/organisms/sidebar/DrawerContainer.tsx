import {
  Box,
  Divider,
  IconButton,
  MenuList,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import MenuDense from "~/components/atoms/menuDense/MenuDense";
import { SidebarProps } from "~/types/SidebarProps";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Menu = [
  "Inicio",
  "Navbar",
  "Hero Section",
  "Historia",
  "Estructura del Programa",
  "Grupos de Expedicion",
  "Eventos",
  " Organizacion",
  " Footer",
  "Users",
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerContainer = ({ sidebarOpen, handleDrawerToggle }: SidebarProps) => {
  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {sidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Box>
        <MenuDense />
      </Box>
    </>
  );
};

export default DrawerContainer;
