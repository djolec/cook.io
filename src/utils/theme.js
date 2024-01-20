import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: ["serif", "sans-serif", "DM Serif Display", "DM Sans"],
  },
  palette: {
    background: {
      main: "hsl(0, 0%, 96%)",
      primaryContainer: "hsl(0, 0%, 98%)",
    },
    text: {
      main: "hsla(0, 0%, 0%, 1)",
    },
    icons: {
      main: "hsla(0, 0%, 0%, 1)",
    },
    buttons: {
      main: "hsl(14, 57%, 92%)",
      hover: "hsl(14, 57%, 87%)",
    },
    orangeButtons: {
      main: "hsl(11, 87%, 59%)",
      hover: "hsl(11, 60%, 50%)",
    },
    filterButtons: {
      hover: "hsla(0, 0%, 85%, 0.4)",
      selected: "hsla(0, 0%, 65%, 0.4)",
      selectedHover: "hsla(0, 0%, 55%, 0.4)",
    },
    disabledButtons: {
      background: "hsl(0, 0%, 80%, 0.2)",
      text: "hsl(0, 0%, 80%, 0.5)",
    },
    border: {
      main: "hsl(10, 19%, 88%)",
    },
  },
});
export const darkTheme = createTheme({
  typography: {
    fontFamily: ["DM Serif Display, serif", "DM Sans, sans-serif"],
  },
  palette: {
    background: {
      main: "hsl(0, 0%, 10%)",
      primaryContainer: "hsl(15, 3%, 15%)",
    },
    text: {
      main: "hsla(0, 0%, 100%, 1)",
    },
    icons: {
      main: "hsla(0, 0%, 100%, 1)",
    },
    buttons: {
      main: "hsl(15, 3%, 24%)",
      hover: "hsl(15, 3%, 19%)",
    },
    orangeButtons: {
      main: "hsl(11, 87%, 59%)",
      hover: "hsl(11, 60%, 50%)",
    },
    filterButtons: {
      hover: "hsla(0, 0%, 55%, 0.3)",
      selected: "hsla(0, 0%, 45%, 0.3)",
      selectedHover: "hsla(0, 0%, 35%, 0.3)",
    },
    disabledButtons: {
      background: "hsl(0, 0%, 80%, 0.02)",
      text: "hsl(0, 0%, 80%, 0.1)",
    },
    border: {
      main: "hsl(11, 3%, 20%)",
    },
  },
});
