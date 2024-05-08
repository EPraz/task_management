import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Box, Collapse, List, ListItem } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const MenuItem = ({ title, path, icon, submenus }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (submenus) {
    return (
      <Box
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <ListItem component={RouterLink} to={path}>
          <ListItemIcon>{/* <Icon>{icon}</Icon> */}</ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {submenus.map((submenu, index) => (
              <MenuItem key={index} {...submenu} />
            ))}
          </List>
        </Collapse>
      </Box>
    );
  } else {
    return (
      <ListItem component={RouterLink} to={path}>
        <ListItemIcon>{/* <Icon>{icon}</Icon> */}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  }
};

const MenuDense = ({ menus }: any) => {
  return (
    <List sx={{ flex: 1, "& a": { color: "#000" } }}>
      {menus.map((menu, index) => (
        <MenuItem key={index} {...menu} />
      ))}
    </List>
  );
};

export default MenuDense;
