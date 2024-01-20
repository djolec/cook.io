import React, { useEffect } from "react";
import { useState } from "react";
import {
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFetchMealData } from "../hooks/fetchData";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import { convertMinutesToHoursAndDays } from "../utils/convertTime";
import { meals } from "../utils/constants";

const MealTabs = () => {
  const [selectedOption, setSelectedOption] = useState("breakfast");

  const handleMealChange = (e, newValue) => {
    if (newValue !== null) {
      setSelectedOption(newValue);
    }
  };

  const { data, isLoading, refetch, isError, error } =
    useFetchMealData(selectedOption);

  useEffect(() => {
    refetch();
  }, [selectedOption]);

  return (
    <Stack
      direction="column"
      spacing={3}
      alignItems="center"
      sx={{ backgroundColor: (theme) => theme.palette.background.main }}
    >
      <ToggleButtonGroup
        sx={{
          color: (theme) => theme.palette.text.main,
          width: { xs: "100%", sm: "90%" },
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          backgroundColor: (theme) => theme.palette.background.main,
        }}
        value={selectedOption}
        exclusive
        onChange={handleMealChange}
        aria-label="meals"
      >
        {meals.map((meal, index) => (
          <ToggleButton
            size="medium"
            key={index}
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", xl: "1.7rem" },
              textTransform: "capitalize",
              color: (theme) => theme.palette.text.main,
              borderRadius: "0%",
              border: "none",
              borderBottom: "1px solid",
              borderBottomColor: (theme) => theme.palette.border.main,
              ":hover": {
                backgroundColor: (theme) => theme.palette.filterButtons.hover,
              },
              "&.Mui-selected": {
                backgroundColor: (theme) =>
                  theme.palette.filterButtons.selected,
                borderBottom: "2px solid",
                borderBottomColor: (theme) => theme.palette.orangeButtons.main,
                color: (theme) => theme.palette.text.main,
                ":hover": {
                  backgroundColor: (theme) =>
                    theme.palette.filterButtons.selectedHover,
                },
              },
            }}
            value={meal}
            aria-label={meal}
          >
            {meal}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {isError && (
        <Box
          sx={{
            marginX: "auto",
            width: { xs: "100%", sm: "90%" },
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: (theme) => theme.palette.text.main }}
            variant="h4"
          >
            {error.message}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          marginX: "auto",
          width: { xs: "100%", sm: "90%" },
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fill, minmax(150px, 1fr))",
            xl: "repeat(auto-fill, minmax(250px, 1fr))",
          },
          gap: "10px",
        }}
      >
        {isLoading
          ? [...Array(12)].map((_, index) => <RecipeCardSkeleton key={index} />)
          : data?.data.hits.slice(0, 12).map((recipe, index) => {
              const {
                images: {
                  SMALL: { url: img },
                },
                label,
                totalTime,
              } = recipe.recipe;
              const {
                self: { href },
              } = recipe._links;
              const time = convertMinutesToHoursAndDays(totalTime);
              return (
                <RecipeCard
                  img={img}
                  time={time}
                  label={label}
                  key={index}
                  url={href}
                />
              );
            })}
      </Box>
      <Link to={`/recipes?mealType=${selectedOption}`}>
        <Button
          size="large"
          sx={{
            textTransform: "none",
            color: (theme) => theme.palette.text.main,
            borderRadius: { xs: "25px", xl: "40px" },
            paddingX: "3rem",
            fontSize: { xs: "1rem", xl: "1.8rem" },
            backgroundColor: (theme) => theme.palette.buttons.main,
            ":hover": {
              backgroundColor: (theme) => theme.palette.buttons.hover,
            },
          }}
        >
          Show more
        </Button>
      </Link>
    </Stack>
  );
};

export default MealTabs;
