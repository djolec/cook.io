import {
  AccessAlarmIcon,
  BlenderIcon,
  EnergySavingsLeafIcon,
  FastfoodIcon,
  HealthAndSafetyIcon,
  RestaurantIcon,
  RoomServiceIcon,
  PublicIcon,
} from "../components";

export const filterAccordionIcons = [
  AccessAlarmIcon,
  BlenderIcon,
  EnergySavingsLeafIcon,
  FastfoodIcon,
  HealthAndSafetyIcon,
  RestaurantIcon,
  RoomServiceIcon,
  PublicIcon,
];

export const accordionNames = {
  "Cooking Time": {
    exclusive: true,
    values: [
      ["< 5 minutes", "5"],
      ["5 - 10 minutes", "5-10"],
      ["10 - 20 minutes", "10-20"],
      ["20 - 30 minutes", "20-30"],
      ["30 - 40 minutes", "30-40"],
      ["40 - 50 minutes", "40-50"],
      ["50 - 60 minutes", "50-60"],
      ["> 1 hours", "60+"],
    ],
  },
  Ingredients: {
    exclusive: true,
    values: [
      ["< 5 ingredients", "5"],
      ["5 - 10 ingredients", "5-10"],
      ["10 - 20 ingredients", "10-20"],
      ["20 - 30 ingredients", "20-30"],
      ["> 30 ingredients", "30+"],
    ],
  },
  Calories: {
    exclusive: true,
    values: [
      ["< 50 calories", "50"],
      ["50 - 100 calories", "50-100"],
      ["100 - 200 calories", "100-200"],
      ["200 - 300 calories", "200-300"],
      ["300 - 400 calories", "300-400"],
      ["400 - 500 calories", "400-500"],
      ["> 500 calories", "500+"],
    ],
  },
  Diet: {
    exclusive: false,
    values: [
      ["Balanced", "balanced"],
      ["High Fiber", "high-fiber"],
      ["High Protein", "high-protein"],
      ["Low Carb", "low-carb"],
      ["Low Fat", "low-fat"],
      ["Low Sodium", "low-sodium"],
    ],
  },
  Health: {
    exclusive: false,
    values: [
      ["Alcohol Cocktail", "alcohol-cocktail"],
      ["Alcohol Free", "alcohol-free"],
      ["Celery Free", "celery-free"],
      ["Crustcean Free", "crustcean-free"],
      ["Dairy Free", "dairy-free"],
      ["DASH", "DASH"],
      ["Egg Free", "egg-free"],
      ["Fish Free", "fish-free"],
      ["FODMAP Free", "fodmap-free"],
      ["Gluten Free", "gluten-free"],
      ["Immuno Supportive", "immuno-supportive"],
      ["Keto Friendly", "keto-friendly"],
      ["Kidney Friendly", "kidney-friendly"],
      ["Kosher", "kosher"],
      ["Low Fat Abs", "low-fat-abs"],
      ["Low Potassium", "low-potassium"],
      ["Low Sugar", "low-sugar"],
      ["Lupine Free", "lupine-free"],
      ["Mediterranean", "Mediterranean"],
      ["Mollusk Free", "mollusk-free"],
      ["Mustard Free", "mustard-free"],
      ["No oil added", "no-oil-added"],
      ["Paleo", "paleo"],
      ["Peanut Free", "peanut-free"],
      ["Pescatarian", "pescatarian"],
      ["Pork Free", "pork-free"],
      ["Red Meat Free", "red-meat-free"],
      ["Sesame Free", "sesame-free"],
      ["Shellfish-Free", "shellfish-free"],
      ["Soy Free", "soy-free"],
      ["Sugar Conscious", "sugar-conscious"],
      ["Sulfite Free", "sulfite-free"],
      ["Tree Nut Free", "tree-nut-free"],
      ["Vegan", "vegan"],
      ["Vegetarian", "vegetarian"],
      ["Wheat Free", "wheat-free"],
    ],
  },
  Meal: {
    exclusive: false,
    values: [
      ["Breakfast", "breakfast"],
      ["Lunch", "lunch"],
      ["Dinner", "dinner"],
      ["Snack", "snack"],
      ["Teatime", "teatime"],
    ],
  },
  Dish: {
    exclusive: false,
    values: [
      ["Biscuits and cookies", "biscuits and cookies"],
      ["Bread", "bread"],
      ["Cereals", "cereals"],
      ["Condiments and sauces", "condiments and sauces"],
      ["Desserts", "desserts"],
      ["Drinks", "drinks"],
      ["Main course", "main course"],
      ["Pancake", "pancake"],
      ["Preps", "preps"],
      ["Preserve", "preserve"],
      ["Salad", "salad"],
      ["Sandwiches", "sandwiches"],
      ["Side dish", "side dish"],
      ["Soup", "soup"],
      ["Starter", "starter"],
      ["Sweets", "sweets"],
    ],
  },
  Cuisine: {
    exclusive: false,
    values: [
      ["American", "american"],
      ["Asian", "asian"],
      ["British", "british"],
      ["Caribbean", "caribbean"],
      ["Central Europe", "central europe"],
      ["Drinks", "drinks"],
      ["Chinese", "chinese"],
      ["Eastern Europe", "eastern europe"],
      ["French", "french"],
      ["Indian", "indian"],
      ["Italian", "italian"],
      ["Japanese", "japanese"],
      ["Kosher", "kosher"],
      ["Mediterranean", "mediterranean"],
      ["Mexican", "mexican"],
      ["Middle Eastern", "middle eastern"],
      ["Nordic", "nordic"],
      ["South American", "south american"],
      ["South East Asian", "south east asian"],
    ],
  },
};

export const healthPrefs = [
  "Alcohol-Cocktail",
  "Alcohol-Free",
  "Celery-Free",
  "Crustacean-Free",
  "Dairy-Free",
  "DASH",
  "Egg-Free",
  "Fish-Free",
  "Fodmap-Free",
  "Gluten-Free",
  "Immuno-Supportive",
  "Keto-Friendly",
  "Kidney-Friendly",
  "Kosher",
  "Low-Fat-Abs",
  "Low-Potassium",
  "Low-Sugar",
  "Lupine-Free",
  "Mediterranean",
  "Mollusk-Free",
  "Mustard-Free",
  "No-Oil-Added",
  "Paleo",
  "Peanut-Free",
  "Pescatarian",
  "Pork-Free",
  "Red-Meat-Free",
  "Sesame-Free",
  "Shellfish-Free",
  "Soy-Free",
  "Sugar-Conscious",
  "Sulfite-Free",
  "Tree-Nut-Free",
  "Vegan",
  "Vegetarian",
  "Wheat-Free",
];

export const meals = ["breakfast", "lunch", "dinner", "snack", "teatime"];
