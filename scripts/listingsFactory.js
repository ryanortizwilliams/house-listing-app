// factories are used for handling HTTP requests
angular.module("listingsApp").factory("listingsFactory", ($http) => {
  const getListings = () => $http.get("data/data.json");

  return {
    getListings,
  };
});
