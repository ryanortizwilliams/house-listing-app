angular
  .module("listingsApp")
  .controller("listingsController", function ($scope, listingsFactory) {
    $scope.listings;
    $scope.priceInfo = {
      min: 0,
      max: 1000000,
    };
    $scope.addListing = false;
    $scope.newListing = {};
    $scope.addHouse = function (newListing) {
      newListing.image = "default-crib";
      $scope.listings.push(newListing);
      $scope.newListing = {};
    };

    listingsFactory
      .getListings()
      .then(function (response) {
        $scope.listings = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    $scope.showMessage = false;
    $scope.sayHello = function () {
      console.log("Hello");
      $scope.showMessage = true;
    };
  });
