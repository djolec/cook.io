import React from "react";
import { Skeleton, Card, CardContent, CardActions } from "@mui/material";

const RecipeCardSkeleton = () => {
  return (
    <Card
      elevation={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: (theme) => theme.palette.background.primaryContainer,
      }}
    >
      <Skeleton
        variant="rectangular"
        height={165}
        animation="wave"
        sx={{
          backgroundColor: (theme) => theme.palette.filterButtons.selected,
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1.2rem",
          flexGrow: 1,
          padding: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Skeleton
          variant="text"
          height={40}
          width={130}
          animation="wave"
          sx={{
            backgroundColor: (theme) => theme.palette.filterButtons.selected,
          }}
        />

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            variant="text"
            height={40}
            width={80}
            animation="wave"
            sx={{
              backgroundColor: (theme) => theme.palette.filterButtons.selected,
            }}
          />
          <Skeleton
            variant="circular"
            height={35}
            width={35}
            animation="wave"
            sx={{
              backgroundColor: (theme) => theme.palette.filterButtons.selected,
            }}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RecipeCardSkeleton;
