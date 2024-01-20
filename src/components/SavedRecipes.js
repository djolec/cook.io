import React from "react";
import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { SavedRecipesContext } from "./AppRoutes";
import { Box, Typography } from "@mui/material";

const SavedRecipes = () => {
  const { savedRecipes } = useContext(SavedRecipesContext);

  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: "calc(70px + 1rem)",
        paddingBottom: "1rem",
        paddingX: { xs: "1rem", sm: "2rem" },
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(auto-fill, minmax(150px, 1fr))",
          xl: "repeat(auto-fill, minmax(250px, 1fr))",
        },
        gap: "10px",
        backgroundColor: (theme) => theme.palette.background.main,
        color: (theme) => theme.palette.text.main,
      }}
    >
      {savedRecipes.length > 0 &&
        savedRecipes.map((recipe, index) => {
          const { img, label, time, url } = recipe;
          return (
            <RecipeCard
              key={index}
              img={img}
              label={label}
              time={time}
              url={url}
            />
          );
        })}
      {!savedRecipes.length && (
        <Typography
          textAlign="center"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          variant="h5"
        >
          You haven't saved any recipes.
        </Typography>
      )}
    </Box>
  );
};

export default SavedRecipes;
