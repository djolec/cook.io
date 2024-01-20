import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HealthPreferenceButton = ({ pref }) => {
  return (
    <Link to={`/recipes?health=${pref !== "DASH" ? pref.toLowerCase() : pref}`}>
      <Button
        sx={{
          fontSize: { xs: "1rem", sm: "0.9rem", xl: "1.2rem" },
          color: (theme) => theme.palette.text.main,
          textTransform: "none",
          borderRadius: "40px",
          paddingX: "1rem",
          backgroundColor: (theme) => theme.palette.buttons.main,
          ":hover": { backgroundColor: (theme) => theme.palette.buttons.hover },
        }}
      >
        {pref}
      </Button>
    </Link>
  );
};

export default HealthPreferenceButton;
