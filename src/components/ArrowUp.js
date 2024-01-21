import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton } from "@mui/material";
import { scrollToTop } from "../utils/scrollToTop";
import { useTrackScroll } from "../hooks/trackScroll";

const ArrowUp = () => {
  const isFixed = useTrackScroll();

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        display: isFixed ? "block" : "none",
        position: "fixed",
        bottom: "100px",
        right: "1rem",
        zIndex: 10,
        height: "3.2rem",
        width: "3.2rem",
        color: (theme) => theme.palette.text.main,
        backgroundColor: (theme) => theme.palette.buttons.main,
        ":hover": {
          backgroundColor: (theme) => theme.palette.buttons.hover,
        },
      }}
    >
      <ArrowUpwardIcon sx={{ height: "2.3rem", width: "2.3rem" }} />
    </IconButton>
  );
};

export default ArrowUp;
