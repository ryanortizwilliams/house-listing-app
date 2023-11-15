angular
  .module("listingsApp")
  .controller("listingsController", function ($scope, listingsFactory) {
    $scope.hello = "Hello World!";
    $scope.listings = listingsFactory.getListings();
  });
