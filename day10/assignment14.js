const profile = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    Zipcode: "94101",
  },
};
const update = {
  age: 30,
  address: {
    Zipcode: "94109",
    country: "USA",
  },
};
const mergeProfiles = {
  ...profile,
  ...update,
  address: {
    ...profile.address,
    ...update.address,
  },
};
console.log(mergeProfiles);
