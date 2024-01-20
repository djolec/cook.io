import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import HealthPreferenceButton from "./HealthPreferenceButton";
import { healthPrefs } from "../utils/constants";

const HealthPreference = () => {
  return (
    <Container
      sx={{
        width: { xs: "100%", sm: "90%" },
        marginBottom: "4rem",
        padding: "0",
        backgroundColor: (theme) => theme.palette.background.main,
      }}
    >
      <Stack spacing={2} direction="column" alignItems="center">
        <Stack
          spacing={0}
          alignItems="center"
          sx={{ color: (theme) => theme.palette.text.main }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            textAlign="center"
            sx={{
              fontFamily: "DM Serif Display, serif",
              fontWeight: 400,
              letterSpacing: "1px",
              fontSize: { xs: "2rem", xl: "3.5rem" },
            }}
          >
            Choose Your Health Preference
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "14px", xl: "1.2rem" },
              width: {
                xs: "100%",
                sm: "70%",
              },
            }}
            variant="body2"
            textAlign="center"
          >
            Choosing your health preference is an important step towards
            achieving a healthier lifestyle.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {healthPrefs.map((pref, index) => (
            <HealthPreferenceButton key={index} pref={pref} />
          ))}
        </Box>
      </Stack>
    </Container>
  );
};

export default HealthPreference;
