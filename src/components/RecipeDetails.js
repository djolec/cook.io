import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import RecipeDetailsSkeleton from "./RecipeDetailsSkeleton";
import { useFetchRecipeById } from "../hooks/fetchData";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  Button,
  Divider,
  List,
  ListItem,
  Link,
} from "@mui/material";
import { SavedRecipesContext } from "./AppRoutes";

const RecipeDetails = () => {
  const { savedRecipes, setSavedRecipes } = useContext(SavedRecipesContext);

  const { id } = useParams();
  const [isSaved, setIsSaved] = useState();

  const { data, isLoading, refetch, isError, error } = useFetchRecipeById(id);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsSaved(
      JSON.parse(localStorage.getItem("savedRecipes")).some((recipe) => {
        const parts = recipe.url.split("/");
        const dynamicPart = parts[parts.length - 1].split("?")[0];
        return dynamicPart === id;
      })
    );
    refetch();
  }, []);

  const {
    calories,
    label,
    ingredientLines,
    dietLabels,
    source,
    totalTime,
    url: instructionsLink,
    yield: servings,
    images: { REGULAR: { url, height, width } = {} } = {},
  } = data?.data?.recipe || {};

  console.log(data?.data?.recipe);

  const { _links: { self: { href } = {} } = {} } = data?.data || {};

  const handleSaveRecipe = () => {
    const recipeObj = {
      img: url,
      time: totalTime,
      label: label,
      url: href,
    };

    const exists = JSON.parse(localStorage.getItem("savedRecipes")).some(
      (recipe) => recipe.url === recipeObj.url
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

  if (isError) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.background.main,
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350px",
            color: (theme) => theme.palette.text.main,
          }}
        >
          {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: (theme) => theme.palette.background.main,
      }}
    >
      {isLoading ? (
        <RecipeDetailsSkeleton />
      ) : (
        <Stack
          justifyContent="center"
          sx={{
            flexGrow: 1,
            flexDirection: { xs: "column", sm: "row" },
            paddingTop: { xs: "calc(70px + 1rem)", xl: "calc(120px + 2rem)" },
            paddingBottom: "1rem",
            paddingX: { xs: "1rem", sm: "0rem" },
            gap: "1rem",
            backgroundColor: (theme) => theme.palette.background.main,
            color: (theme) => theme.palette.text.main,
          }}
        >
          <Card
            elevation={0}
            sx={{
              width: { xs: "100%", sm: "32%" },
              height: "fit-content",
              borderRadius: "15px",
              backgroundColor: "#1A1A1A",
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              sx={{ backgroundColor: "#1A1A1A" }}
            >
              <CardMedia
                height="300"
                width="300"
                sx={{
                  height: "auto",
                  width: "100%",
                  backgroundColor: "#1A1A1A",
                }}
                src={url}
                component="img"
                alt="recipe image"
              />
            </Box>
          </Card>

          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{ width: { xs: "100%", sm: "45%" } }}
          >
            <Stack direction="column" spacing={3}>
              <Stack
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="start"
              >
                <Stack direction="column" sx={{ width: "60%" }}>
                  <Typography
                    variant="h1"
                    fontWeight="600"
                    sx={{ fontSize: { xs: "1.6rem", xl: "3rem" } }}
                  >
                    {label}
                  </Typography>
                  <Stack direction="row" spacing={0.8}>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: "1rem", xl: "1.8rem" } }}
                    >
                      by
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      sx={{ fontSize: { xs: "1rem", xl: "1.8rem" } }}
                    >
                      {source}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={1.5}>
                  <Button
                    onClick={handleGoBack}
                    sx={{
                      fontSize: { xs: "14px", xl: "1.5rem" },
                      width: { xs: "85px", xl: "130px" },
                      textTransform: "none",
                      color: (theme) => theme.palette.text.main,
                      backgroundColor: (theme) => theme.palette.buttons.main,
                      ":hover": {
                        backgroundColor: (theme) => theme.palette.buttons.hover,
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSaveRecipe}
                    startIcon={
                      isSaved ? (
                        <MdOutlineBookmark sx={{}} />
                      ) : (
                        <MdOutlineBookmarkAdd />
                      )
                    }
                    sx={{
                      "& .MuiButton-startIcon>*:nth-of-type(1)": {
                        height: { xs: "20px", xl: "30px" },
                        width: "auto",
                      },
                      width: { xs: "85px", xl: "130px" },
                      textTransform: "none",
                      color: (theme) => theme.palette.text.main,
                      backgroundColor: (theme) => theme.palette.buttons.main,
                      ":hover": {
                        backgroundColor: (theme) => theme.palette.buttons.hover,
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: { xs: "14px", xl: "1.5rem" } }}>
                      {isSaved ? "Saved" : "Save"}
                    </Typography>
                  </Button>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-evenly"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      backgroundColor: (theme) => theme.palette.border.main,
                    }}
                  />
                }
              >
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "80px" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="500"
                    sx={{ fontSize: { xs: "24px", xl: "2.5rem" } }}
                  >
                    {ingredientLines?.length}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "14px", xl: "1.2rem" } }}
                  >
                    ingredients
                  </Typography>
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "80px" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="500"
                    sx={{ fontSize: { xs: "24px", xl: "2.5rem" } }}
                  >
                    {totalTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "14px", xl: "1.2rem" } }}
                  >
                    minutes
                  </Typography>
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "80px" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="500"
                    sx={{ fontSize: { xs: "24px", xl: "2.5rem" } }}
                  >
                    {Math.floor(calories).toString()}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "14px", xl: "1.2rem" } }}
                  >
                    calories
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2}>
                {dietLabels?.map((label, index) => (
                  <Typography
                    key={index}
                    sx={{
                      border: "1px solid",
                      borderColor: (theme) => theme.palette.border.main,
                      borderRadius: "4px",
                      px: "0.4rem",
                      fontSize: { xs: "1rem", xl: "1.4rem" },
                      fontFamily: "DM Sans, sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>

              <Stack direction="column">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    borderBottom: "1px solid",
                    borderBottomColor: (theme) => theme.palette.border.main,
                    pb: "5px",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    sx={{ fontSize: { xs: "1rem", xl: "1.4rem" } }}
                  >
                    Ingredients
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: { xs: "1rem", xl: "1.2rem" } }}
                  >
                    for {servings} {servings > 1 ? "servings" : "serving"}
                  </Typography>
                </Stack>
                <List dense={true}>
                  {ingredientLines?.map((ingr, index) => (
                    <ListItem
                      disablePadding
                      key={index}
                      sx={{
                        fontFamily: "DM Sans, sans-serif",
                        listStyleType: "disc",
                        display: "list-item",
                        marginLeft: "16px",
                        fontSize: { xs: "1rem", xl: "1.2rem" },
                      }}
                    >
                      {ingr}
                    </ListItem>
                  ))}
                </List>
              </Stack>
              <Stack direction="column">
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "1rem", xl: "1.4rem" } }}
                >
                  Link to instructions:
                </Typography>
                <Link
                  href={`${instructionsLink}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography
                    variant="body1"
                    sx={{
                      textDecoration: "underline",
                      color: (theme) => theme.palette.text.main,
                      fontSize: { xs: "1rem", xl: "1.4rem" },
                      overflowWrap: "break-word",
                    }}
                  >
                    {instructionsLink}
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default RecipeDetails;
