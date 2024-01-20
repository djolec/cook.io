import axios from "axios";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

const app_id = "f6f0a034";
const app_key = "b47bdcf0e45e5e965a9a94db234046a4";
const type = "public";

// Fetch data for MealTabs in Homepage
const fetchMealData = (meal) => {
  return axios.get(
    `https://api.edamam.com/api/recipes/v2/?type=${type}&app_id=${app_id}&app_key=${app_key}&mealType=${meal}`
  );
};

export const useFetchMealData = (meal) => {
  return useQuery({
    queryKey: [`${meal}`],
    queryFn: () => fetchMealData(meal),
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

// Fetch data for Homepage Cuisine
const fetchCuisine = (cuisine) => {
  return axios.get(
    `https://api.edamam.com/api/recipes/v2?type=${type}&app_id=${app_id}&app_key=${app_key}&cuisineType=${cuisine}`
  );
};

export const useFetchCuisine = (cuisine) => {
  return useQuery({
    queryKey: [`${cuisine}`],
    queryFn: () => fetchCuisine(cuisine),
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

// Fetch Recipe page data
const fetchRecipePageData = ({ pageParam }) => {
  return axios.get(`${pageParam}`);
};

export const useFetchRecipePageData = (query) => {
  return useInfiniteQuery({
    queryKey: [`${query}`],
    queryFn: (pageParam) => fetchRecipePageData(pageParam),
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    initialPageParam: `https://api.edamam.com/api/recipes/v2?type=${type}&app_id=${app_id}&app_key=${app_key}&${query}`,
    getNextPageParam: (lastPage, pages) =>
      lastPage.data._links?.next?.href || null,
  });
};

//Fetch recipe by ID
const fetchRecipeById = (id) => {
  return axios.get(
    `https://api.edamam.com/api/recipes/v2/${id}?type=${type}&app_id=${app_id}&app_key=${app_key}`
  );
};

export const useFetchRecipeById = (id) => {
  return useQuery({
    queryKey: [`${id}`],
    queryFn: () => fetchRecipeById(id),
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
