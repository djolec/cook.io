import React from "react";
import { Stack } from "@mui/material";
import HomepageCuisine from "./HomepageCuisine";

const Cuisines = () => {
  const cuisines = ["French", "Italian"];

  return (
    <Stack
      direction="column"
      spacing={4}
      alignItems="center"
      sx={{
        marginY: "2.5rem",
        backgroundColor: (theme) => theme.palette.background.main,
      }}
    >
      {cuisines.map((cuisine, index) => (
        <HomepageCuisine key={index} cuisine={cuisine} />
      ))}
    </Stack>
  );
};

export default Cuisines;
