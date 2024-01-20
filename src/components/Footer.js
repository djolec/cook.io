import React from "react";
import { ReactComponent as LogoLight } from "../assets/logo-light.svg";
import { ReactComponent as LogoDark } from "../assets/logo-dark.svg";
import { ReactComponent as Edamam } from "../assets/edamam.svg";
import { Stack, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = ({ darkMode }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingY="1rem"
      sx={{
        backgroundColor: (theme) => theme.palette.background.main,
        flexDirection: { xs: "column", sm: "row" },
        paddingX: { xs: "1rem", xl: "2rem" },
        borderTop: "1px solid",
        borderTopColor: (theme) => theme.palette.border.main,
        paddingBottom: { xs: "95px", sm: "1rem", xl: "2rem" },
        paddingTop: { xl: "2rem" },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          width: { xs: "220px", xl: "310px" },
          fontSize: { xl: "2rem" },
          textAlign: { xs: "center", sm: "left" },
          color: (theme) => theme.palette.text.main,
        }}
      >
        Copyright&#169; DC
      </Typography>
      <Button
        disableRipple
        sx={{
          display: { xs: "none", sm: "block" },
          ":hover": { bgcolor: "transparent" },
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
      <Link
        sx={{ width: { xs: "220px", xl: "310px" }, height: "auto" }}
        href="https://www.edamam.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Edamam style={{ width: "100%", height: "auto" }} />
      </Link>
    </Stack>
  );
};

export default Footer;
