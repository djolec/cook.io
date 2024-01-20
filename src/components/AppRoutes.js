import React from "react";
import Homepage from "./Homepage";
import Recipes from "./Recipes";
import RecipeDetails from "./RecipeDetails";
import SavedRecipes from "./SavedRecipes";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

export const SavedRecipesContext = createContext();

const AppRoutes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("savedRecipes")) {
      setSavedRecipes(JSON.parse(localStorage.getItem("savedRecipes")));
    } else {
      localStorage.setItem("savedRecipes", JSON.stringify([]));
    }
  }, []);

  return (
    <main
      style={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: (theme) => theme.palette.background.main,
      }}
    >
      <SavedRecipesContext.Provider value={{ savedRecipes, setSavedRecipes }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipes/" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
        </Routes>
      </SavedRecipesContext.Provider>
    </main>
  );
};

export default AppRoutes;
