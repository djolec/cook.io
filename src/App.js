import "./App.css";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { lightTheme, darkTheme } from "./utils/theme";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const selectedTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <QueryClientProvider client={queryClient}>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Router>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <AppRoutes />
            <MobileNav />
            <Footer darkMode={darkMode} />
          </Router>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
