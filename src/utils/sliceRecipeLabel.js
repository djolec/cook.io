export const sliceRecipeLabel = (label) => {
  return label.length > 26 ? `${label.slice(0, 26)}...` : label;
};
