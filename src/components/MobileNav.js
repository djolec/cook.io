import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useState, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const [value, setValue] = useState();
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === "/recipes") {
      setValue(0);
    } else if (location.pathname === "/") {
      setValue(1);
    } else if (location.pathname === "/savedrecipes") {
      setValue(2);
    } else {
      setValue(null);
    }
  });

  const iconStyles = {
    ".MuiBottomNavigationAction-label.Mui-selected": { fontSize: "1.2rem" },
    ".MuiBottomNavigationAction-label": { fontSize: "1.2rem" },
    color: (theme) => theme.palette.text.main,
    "&.Mui-selected": {
      fontSize: "1.2rem",
      color: (theme) => theme.palette.text.main,
    },
  };

  const getIconStyles = (isSelected) => ({
    width: "auto",
    height: "40px",
    paddingX: isSelected ? "20px" : "0px",
    backgroundColor: isSelected
      ? (theme) => theme.palette.filterButtons.selected
      : null,
    borderRadius: isSelected ? "35px" : "0px",
  });

  return (
    <BottomNavigation
      sx={{
        zIndex: "10",
        backgroundColor: (theme) => theme.palette.background.primaryContainer,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "90px",
        position: "fixed",
        bottom: 0,
        display: { xs: "flex", sm: "none" },
        py: "2.5rem",
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        disableRipple
        sx={iconStyles}
        aria-label="Recipes"
        component={Link}
        to={"/recipes?diet=balanced"}
        label="Recipes"
        icon={<MenuBookIcon sx={getIconStyles(value === 0)} />}
      />
      <BottomNavigationAction
        disableRipple
        sx={iconStyles}
        aria-label="Home"
        component={Link}
        to={"/"}
        label="Home"
        icon={<HomeIcon sx={getIconStyles(value === 1)} />}
      />
      <BottomNavigationAction
        disableRipple
        sx={iconStyles}
        aria-label="Saved recipes"
        component={Link}
        to={"/savedrecipes"}
        label="Saved"
        icon={<SaveIcon sx={getIconStyles(value === 2)} />}
      />
    </BottomNavigation>
  );
};

export default MobileNav;
