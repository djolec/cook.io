import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { sliceRecipeLabel } from "../utils/sliceRecipeLabel";
import { SavedRecipesContext } from "./AppRoutes";

const RecipeCard = ({ img, time, label, url }) => {
  const { savedRecipes, setSavedRecipes } = useContext(SavedRecipesContext);

  const [isSaved, setIsSaved] = useState();
  const parts = url.split("/");
  const dynamicPart = parts[parts.length - 1].split("?")[0];

  useEffect(() => {
    setIsSaved(
      JSON.parse(localStorage.getItem("savedRecipes")).some(
        (recipe) => recipe.url === url
      )
    );
  });

  const handleSaveRecipe = () => {
    const recipeObj = {
      img: img,
      time: time,
      label: label,
      url: url,
    };

    const exists = JSON.parse(localStorage.getItem("savedRecipes")).some(
      (recipe) => recipe.url === url
    );

    if (!exists) {
      setIsSaved(true);
      localStorage.setItem(
        "savedRecipes",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("savedRecipes")),
          recipeObj,
        ])
      );
      setSavedRecipes([...savedRecipes, recipeObj]);
    } else {
      setIsSaved(false);
      localStorage.setItem(
        "savedRecipes",
        JSON.stringify(
          JSON.parse(localStorage.getItem("savedRecipes")).filter(
            (recipe) => recipe.url !== recipeObj.url
          )
        )
      );
      setSavedRecipes(
        savedRecipes.filter((recipe) => recipe.url !== recipeObj.url)
      );
    }
  };

  return (
    <Card
      elevation={1}
      sx={{
        backgroundColor: (theme) => theme.palette.background.primaryContainer,
        position: "relative",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          "& .label": {
            color: (theme) => theme.palette.orangeButtons.main,
          },
        },
      }}
    >
      <CardMedia
        sx={{
          height: "auto",
          aspectRatio: "1/1",
        }}
        component="img"
        image={img}
        alt="recipe image"
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: { xs: "110px", xl: "160px" },
          padding: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Link to={`/recipe/${dynamicPart}`} style={{ textDecoration: "none" }}>
          <Typography
            className="label"
            sx={{
              fontSize: { xl: "1.5rem" },
              color: (theme) => theme.palette.text.main,
              fontWeight: 600,
              paddingX: "8px",
              transition: "color 0.3s",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "0px",
              },
            }}
            variant="subtitle1"
            lineHeight={1.4}
          >
            {sliceRecipeLabel(label)}
          </Typography>
        </Link>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.text.main,

              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <AccessTimeIcon
              sx={{
                width: { xs: "20px", xl: "30px" },
                height: { xs: "20px", xl: "30px" },
                marginRight: { xl: "5px" },
              }}
            />
            <Typography sx={{ fontSize: { xl: "1.2rem" } }}>{time}</Typography>
          </Typography>
          <IconButton
            sx={{
              color: (theme) => theme.palette.icons.main,
              width: { xs: "35px", xl: "45px" },
              height: { xs: "35px", xl: "45px" },
              backgroundColor: (theme) => theme.palette.buttons.main,
              ":hover": {
                backgroundColor: (theme) => theme.palette.buttons.hover,
              },
            }}
            onClick={handleSaveRecipe}
          >
            {isSaved ? <MdOutlineBookmark /> : <MdOutlineBookmarkAdd />}
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
