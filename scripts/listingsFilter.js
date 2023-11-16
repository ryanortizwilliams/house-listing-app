angular.module("listingsApp").filter("listingsFilter", function () {
  return function (listings, priceInfo) {
    let filtered = [];
    let min = priceInfo.min;
    let max = priceInfo.max;

    angular.forEach(listings, function (listing) {
      if (listing.price >= min && listing.price <= max) {
        filtered.push(listing);
      }
    });
    return filtered;
  };
});
