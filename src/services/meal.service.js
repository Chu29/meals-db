import { api } from "./api";

export const getMealCategories = async () => {
  const res = api.get("categories.php");
  return res.json();
};

export const getMealsByCategory = async (category) => {
  const res = api.get("filter.php", {
    searchParams: {
      c: category,
    },
  });
  return res.json();
};

export const getMealDetailsById = async (id) => {
  const res = api.get("lookup.php", {
    searchParams: {
      i: id,
    },
  });
  return res.json();
};

export const searchMealByName = async (name) => {
  const res = api.get("search.php", {
    searchParams: {
      s: name,
    },
  });
  return res.json();
};
