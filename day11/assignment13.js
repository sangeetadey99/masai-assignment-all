const proccessCategories = (categories) => {
  const counts = categories.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return counts;
};
const processAndSortCatagories = (categories) => {
  const counts = categories.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const sortedObject = Object.fromEntries(sorted);
  return sortedObject;
};
const input = [
  "Electronics",
  "clothing",
  "Electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];
console.log("Counts:", proccessCategories(input));
console.log("Sorted:", processAndSortCatagories(input));
