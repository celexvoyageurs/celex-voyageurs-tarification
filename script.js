angular.module("app", ["ngRoute"]);

angular.module("app").run(function () {
});

angular.module("app").config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'tarifs.html',
        controller: 'TarificationController',
        controllerAs: 'tarificationCtrl',
    });
})

angular.module("app").controller("TarificationController", function (citiesWeight, destinationsWeight) {
    var self = this;

    self.people = "1";

    self.cities = Object.keys(citiesWeight);
    self.destinations = Object.keys(destinationsWeight);

    self.priceAR = 0;
    self.priceAS = 0;

    self.onUpdateField = function () {
        console.log("Selected", self.departure_city, self.destination, "transporting", self.people);
        if (self.departure_city && self.destination && self.people) {
            var departureWeight = citiesWeight[self.departure_city];
            self.priceAR = 1.1 * destinationsWeight[self.destination][departureWeight][self.people];
            self.priceAS = 1.1 * (self.priceAR / 2);
            self.priceAR = Math.round(self.priceAR * 100) / 100;
            self.priceAS = Math.round(self.priceAS * 100) / 100;
            self.showPrices = true;
        } else {
            self.showPrices = false;
        }
    }
});