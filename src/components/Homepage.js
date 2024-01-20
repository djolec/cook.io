import React from "react";
import Hero from "./Hero";
import MealTabs from "./MealTabs";
import Cuisines from "./Cuisines";
import HealthPreference from "./HealthPreference";
import { Container, Stack } from "@mui/material";

const Homepage = () => {
  return (
    <Stack
      direction="column"
      sx={{
        paddingTop: "1.5rem",
        width: "100%",
        paddingX: { xs: "1rem", xl: "2rem" },
        backgroundColor: (theme) => theme.palette.background.main,
      }}
    >
      <Hero />
      <MealTabs />
      <Cuisines />
      <HealthPreference />
    </Stack>
  );
};

export default Homepage;
