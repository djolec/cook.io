import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import { Stack, Typography, Box, Button } from "@mui/material";
import { useFetchCuisine } from "../hooks/fetchData";
import { convertMinutesToHoursAndDays } from "../utils/convertTime";

const HomepageCuisine = ({ cuisine }) => {
  const { data, isLoading, refetch, isError, error } = useFetchCuisine(cuisine);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        width: { xs: "100%", sm: "90%" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          width: "90%",
          fontWeight: 600,
          fontSize: { xs: "1.8rem", xl: "2.5rem" },
          color: (theme) => theme.palette.text.main,
        }}
      >
        Latest {cuisine} Recipes
      </Typography>
      <Box
        sx={{
          overflowX: "scroll",
          paddingBottom: "1rem",
          "&::-webkit-scrollbar": {
            height: "15px",
            width: "15px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: (theme) => theme.palette.filterButtons.selected,
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: (theme) => theme.palette.buttons.main,
            borderRadius: "8px",
          },
        }}
      >
        {isError && (
          <Box
            sx={{
              marginX: "auto",
              width: { xs: "100%", sm: "90%" },
              height: "200px",
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
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(160px, 1fr))",
            gap: "10px",
            minWidth: { sm: "calc(200% + 10px)", xs: "calc(600% + 40px)" },
          }}
          direction="row"
        >
          {isLoading
            ? [...Array(11)].map((_, index) => (
                <RecipeCardSkeleton key={index} />
              ))
            : data?.data.hits.slice(0, 11).map((recipe, index) => {
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
          <Link
            style={{ height: "100%", width: "100%" }}
            to={`/recipes?cuisineType=${cuisine}`}
          >
            <Button
              sx={{
                height: "100%",
                width: "100%",
                textTransform: "none",
                color: (theme) => theme.palette.text.main,

                fontSize: "1.1rem",
                backgroundColor: (theme) => theme.palette.buttons.main,
                ":hover": {
                  backgroundColor: (theme) => theme.palette.buttons.hover,
                },
              }}
            >
              Show More
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default HomepageCuisine;
