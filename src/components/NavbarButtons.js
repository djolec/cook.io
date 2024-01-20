import React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavbarButtons = ({ children, to, pageLocation }) => {
  const location = useLocation();
  return (
    <Button
      sx={{
        display: { xs: "none", sm: "flex" },
        width: { xs: "120px", xl: "210px" },
        ":hover": {
          bgcolor:
            location.pathname === pageLocation
              ? (theme) => theme.palette.filterButtons.selectedHover
              : (theme) => theme.palette.filterButtons.hover,
        },
        borderRadius: "0",
        color: (theme) => theme.palette.text.main,
        fontWeight: "700",
        textTransform: "none",
        fontSize: { xs: "1.1rem", xl: "1.8rem" },
        bgcolor:
          location.pathname === pageLocation
            ? (theme) => theme.palette.filterButtons.selected
            : "inherit",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "2px",
          backgroundColor:
            location.pathname === pageLocation
              ? (theme) => theme.palette.orangeButtons.main
              : "transparent",
        },
      }}
      variant="text"
      color="inherit"
      component={RouterLink}
      to={to}
    >
      {children}
    </Button>
  );
};

export default NavbarButtons;
