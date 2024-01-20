import React from "react";
import { useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import { convertMinutesToHoursAndDays } from "../utils/convertTime";
import { handleScroll } from "../utils/handleScroll";
import { useFetchRecipePageData } from "../hooks/fetchData";
import MobileFilter from "./MobileFilter";

const RecipePageContent = ({ searchQuery }) => {
  const { data, refetch, fetchNextPage, isFetching, isError, error } =
    useFetchRecipePageData(searchQuery);

  useEffect(() => {
    if (searchQuery) {
      refetch();
    }
  }, [searchQuery]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    const scrollHandle = () => handleScroll(fetchNextPage);
    window.addEventListener("scroll", scrollHandle, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <Stack
      spacing={1}
      sx={{
        paddingLeft: { xs: "1rem", sm: "calc(27% + 1rem)" },
        paddingTop: "calc(70px + 1rem)",
        paddingRight: "1rem",
        paddingBottom: "1rem",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          sx={{ color: (theme) => theme.palette.text.main }}
        >
          All recipes
        </Typography>
        <MobileFilter />
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fill, minmax(150px, 1fr))",
            xl: "repeat(auto-fill, minmax(250px, 1fr))",
          },
          gap: "10px",
          position: "relative",
        }}
      >
        {isError && (
          <Typography
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
        )}
        {data?.pages[0].data.count === 0 && (
          <Typography
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
            No recipes match the search.
          </Typography>
        )}
        {data?.pages.map((page) => {
          return page.data.hits.map((recipe, index) => {
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
          });
        })}
        {isFetching &&
          [...Array(20)].map((_, index) => <RecipeCardSkeleton key={index} />)}
      </Box>
    </Stack>
  );
};

export default RecipePageContent;
