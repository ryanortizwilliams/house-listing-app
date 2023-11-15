angular
  .module("listingsApp")
  .controller("listingsController", function ($scope, listingsFactory) {
    $scope.listings;

    listingsFactory
      .getListings()
      .then(function (response) {
        $scope.listings = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  });
