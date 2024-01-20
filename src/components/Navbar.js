import React from "react";
import { ReactComponent as LogoLight } from "../assets/logo-light.svg";
import { ReactComponent as LogoDark } from "../assets/logo-dark.svg";
import { Stack, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ClassIcon from "@mui/icons-material/Class";
import NavbarButtons from "./NavbarButtons";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <AppBar
      elevation={0}
      sx={{
        paddingX: "0rem",
        backgroundColor: (theme) => theme.palette.background.main,
        borderBottom: "1px solid",
        borderBottomColor: (theme) => theme.palette.border.main,
      }}
      position="fixed"
    >
      <Toolbar
        sx={{
          paddingX: { xs: "1rem", xl: "2rem" },
          justifyContent: "space-between",
          alignContent: "center",
          height: { xs: "70px", xl: "120px" },
        }}
      >
        <Button
          disableRipple
          sx={{
            ":hover": { backgroundColor: "transparent" },
            borderRadius: "0",
            width: { xs: "180px", xl: "250px" },
          }}
          component={RouterLink}
          to="/"
        >
          {darkMode ? (
            <LogoDark style={{ width: "100%", height: "auto" }} />
          ) : (
            <LogoLight style={{ width: "100%", height: "auto" }} />
          )}
        </Button>
        <Stack direction="row" sx={{ height: "100%" }}>
          <NavbarButtons pageLocation={"/"} to="/">
            Home
          </NavbarButtons>
          <NavbarButtons pageLocation={"/recipes"} to="/recipes?diet=balanced">
            Recipes
          </NavbarButtons>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              height: { xs: "2.5rem", xl: "3.5rem" },
              width: { xs: "2.5rem", xl: "3.5rem" },
              backgroundColor: (theme) => theme.palette.buttons.main,
              ":hover": {
                backgroundColor: (theme) => theme.palette.buttons.hover,
              },
            }}
            aria-label="ModeNight"
            size="medium"
          >
            {darkMode ? (
              <LightModeIcon
                sx={{
                  width: { xs: "1.5rem", xl: "2.5rem" },
                  height: "auto",
                  color: (theme) => theme.palette.text.main,
                }}
              />
            ) : (
              <ModeNightIcon
                sx={{
                  width: { xs: "1.5rem", xl: "2.5rem" },
                  height: "auto",
                  color: (theme) => theme.palette.text.main,
                }}
              />
            )}
          </IconButton>
          <Button
            sx={{
              display: { xs: "none", sm: "flex" },
              fontWeight: "500",
              fontSize: { xs: "1.1rem", xl: "1.8rem" },
              textTransform: "none",
              color: "white",
              backgroundColor: (theme) => theme.palette.orangeButtons.main,
              ":hover": {
                backgroundColor: (theme) => theme.palette.orangeButtons.hover,
              },
            }}
            startIcon={
              <ClassIcon
                sx={{ width: { xs: "1.5rem", xl: "2.5rem" }, height: "auto" }}
              />
            }
            component={RouterLink}
            to="/savedrecipes"
          >
            Saved Recipes
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
