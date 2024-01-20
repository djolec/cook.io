import React from "react";
import RecipeFilter from "./RecipeFilter";
import RecipePageContent from "./RecipePageContent";
import { useSearchParams } from "react-router-dom";
import { Stack } from "@mui/material";

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = Array.from(searchParams.entries())
    .map(([key, value]) => [key, encodeURIComponent(value)])
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: (theme) => theme.palette.background.main,
      }}
    >
      <RecipeFilter />
      <RecipePageContent searchQuery={searchQuery} />
    </Stack>
  );
};

export default Recipes;
