import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import desktopBanner from "../assets/hero-banner-large.jpg";
import mobileBanner from "../assets/hero-banner-small.jpg";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      navigateToSearchResults(value);
    }
  };

  const handleSearchClick = () => {
    if (value) {
      navigateToSearchResults(value);
    }
  };

  const navigateToSearchResults = (value) => {
    if (value) {
      navigate(`/recipes?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        marginTop: { xs: "80px", xl: "120px" },
        height: { xs: "400px", xl: "550px" },
        width: "100%",
        backgroundImage: {
          md: `url(${desktopBanner})`,
          xs: `url(${mobileBanner})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          color: "white",
          fontSize: { xs: "2.5rem", xl: "4rem" },
          fontFamily: "DM Serif Display, serif",
        }}
        variant="h4"
      >
        Your desired dish?
      </Typography>
      <TextField
        onKeyDown={handleEnterKeyPress}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        variant="standard"
        autoComplete="off"
        inputProps={{
          sx: { fontSize: { xs: "1.2rem", sm: "1rem", xl: "1.8rem" } },
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ color: (theme) => theme.palette.text.main }}
            >
              <LocalDiningIcon
                fontSize="large"
                sx={{ height: { xl: "3.5rem" }, width: "auto" }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                height: "100%",
                maxHeight: "unset",
                borderRadius: "5px",
                backgroundColor: (theme) => theme.palette.orangeButtons.main,
                ":hover": {
                  backgroundColor: (theme) => theme.palette.orangeButtons.hover,
                },
              }}
            >
              <Button
                onClick={handleSearchClick}
                sx={{
                  px: { xs: "22px", xl: "45px" },
                  height: "100%",
                  color: "white",
                }}
              >
                <SearchIcon
                  fontSize="large"
                  sx={{ width: "auto", height: { xl: "3.4rem" } }}
                />
              </Button>
            </InputAdornment>
          ),
          sx: {
            height: "100%",
          },
        }}
        placeholder="Search recipes..."
        sx={{
          input: { color: (theme) => theme.palette.text.main },
          p: { xs: "4px", xl: "8px" },
          width: { xs: "100%", sm: "50%" },
          bgcolor: "white",
          borderRadius: "5px",
          height: { xs: "60px", sm: "50px", xl: "90px" },
          backgroundColor: (theme) => theme.palette.background.primaryContainer,
        }}
      />
      <Typography
        textAlign="center"
        sx={{ color: "white", fontSize: "1.5rem" }}
        variant="body2"
      >
        Search any recipe e.g: burger, pizza, sandwich, toast
      </Typography>
    </Container>
  );
};

export default Hero;
