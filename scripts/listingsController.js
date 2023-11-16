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

    //edit listings
    $scope.editListing = function (listing) {
      $scope.editHouse = true;
      $scope.existingListing = listing;
    };

    $scope.saveListingEdit = function () {
      $scope.existingListing = {};
      $scope.editHouse = false;
    };

    // delete listing
    $scope.deleteListing = function (listing) {
      const index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index, 1);
      $scope.existingListing = {};
      $scope.editHouse = false;
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
