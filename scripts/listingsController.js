angular
  .module("listingsApp")
  .controller("listingsController", function ($scope) {
    $scope.hello = "Hello World!";
    $scope.listings = [
      {
        type: "Condo",
        price: 22000,
        address: "213 Grove Street",
        description: "Excellent place, really nice view!",
      },
      {
        type: "House",
        price: 410500,
        address: "7823 Winding Way",
        description: "Beautiful home with lots of space for a large family",
      },
      {
        type: "Duplex",
        price: 395000,
        address: "834 River Lane",
        description: "Grear neighbourhood and lots of nice green space.",
      },
    ];
  });
