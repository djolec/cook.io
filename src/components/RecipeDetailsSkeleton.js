import React from "react";
import { Stack, Skeleton, Card, Box, Typography, Divider } from "@mui/material";

const RecipeDetailsSkeleton = () => {
  return (
    <Stack
      justifyContent="center"
      sx={{
        flexGrow: 1,
        flexDirection: { xs: "column", sm: "row" },
        paddingTop: "calc(70px + 1rem)",
        paddingBottom: "1rem",
        paddingX: { xs: "1rem", sm: "0rem" },
        gap: "1rem",
        backgroundColor: (theme) => theme.palette.background.main,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: { xs: "100%", sm: "32%" },
          borderRadius: "15px",
          backgroundColor: (theme) => theme.palette.background.main,
        }}
      >
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            backgroundColor: (theme) => theme.palette.filterButtons.selected,
            width: "100%",
            height: "auto",
            aspectRatio: 1 / 1,
          }}
        />
      </Card>
      <Box sx={{ width: { xs: "100%", sm: "45%" }, height: "100%" }}>
        <Stack direction="column" spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            sx={{ width: "100%" }}
          >
            <Stack direction="column" spacing={1} sx={{ width: "65%" }}>
              <Skeleton
                height={35}
                animation="wave"
                variant="rounded"
                width={"80%"}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.filterButtons.selected,
                }}
              />
              <Skeleton
                height={15}
                animation="wave"
                variant="rounded"
                width={"50%"}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.filterButtons.selected,
                }}
              />
            </Stack>
            <Skeleton
              height={35}
              width={"20%"}
              animation="wave"
              variant="rounded"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.filterButtons.selected,
              }}
            />
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
              direction="column"
              spacing={1}
              alignItems="center"
              sx={{ paddingY: "1rem" }}
            >
              <Skeleton
                variant="rounded"
                animation="wave"
                height={50}
                width={50}
                sx={{
                  backgroundColor: (theme) => theme.palette.border.main,
                }}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                height={20}
                width={80}
                sx={{
                  backgroundColor: (theme) => theme.palette.border.main,
                }}
              />
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              alignItems="center"
              sx={{ paddingY: "1rem" }}
            >
              <Skeleton
                variant="rounded"
                animation="wave"
                height={50}
                width={50}
                sx={{
                  backgroundColor: (theme) => theme.palette.border.main,
                }}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                height={20}
                width={80}
                sx={{
                  backgroundColor: (theme) => theme.palette.border.main,
                }}
              />
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              alignItems="center"
              sx={{ paddingY: "1rem" }}
            >
              <Skeleton
                variant="rounded"
                animation="wave"
                height={50}
                width={50}
                sx={{
                  backgroundColor: (theme) => theme.palette.border.main,
                }}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                height={20}
                width={80}
                sx={{
                  backgroundColor: (theme) => theme.palette.border.main,
                }}
              />
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Skeleton
              variant="rounded"
              animation="wave"
              height={25}
              width={90}
              sx={{
                backgroundColor: (theme) => theme.palette.border.main,
              }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              height={25}
              width={90}
              sx={{
                backgroundColor: (theme) => theme.palette.border.main,
              }}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="end"
            sx={{
              borderBottom: "1px solid",
              borderBottomColor: (theme) => theme.palette.border.main,
              pb: "15px",
            }}
          >
            <Skeleton
              variant="rounded"
              animation="wave"
              width={140}
              height={30}
              sx={{
                backgroundColor: (theme) => theme.palette.border.main,
              }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={100}
              height={25}
              sx={{
                backgroundColor: (theme) => theme.palette.border.main,
              }}
            />
          </Stack>
          <Stack direction="column" spacing={1} sx={{ marginTop: "0px" }}>
            <Skeleton
              variant="rounded"
              animation="wave"
              width={400}
              height={25}
              sx={{
                backgroundColor: (theme) => theme.palette.border.main,
              }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={400}
              height={25}
              sx={{
                backgroundColor: (theme) => theme.palette.border.main,
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RecipeDetailsSkeleton;
