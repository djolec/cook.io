export const handleUrlString = (queryObj) => {
  const queryParams = new URLSearchParams();

  const keyMappings = {
    "Cooking Time": "time",
    Ingredients: "ingr",
    Calories: "calories",
    Diet: "diet",
    Health: "health",
    Meal: "mealType",
    Dish: "dishType",
    Cuisine: "cuisineType",
  };

  for (const key in queryObj) {
    const value = queryObj[key];
    const mappedKey = keyMappings[key] || key;

    if (Array.isArray(value)) {
      if (value) {
        value.forEach((item) => queryParams.append(mappedKey, item));
      }
    } else {
      if (value) {
        queryParams.append(mappedKey, value);
      }
    }
  }

  const queryString = queryParams.toString();

  return queryString;
};
