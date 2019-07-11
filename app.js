"use strict";
exports.__esModule = true;
var Chance = require("chance");
var chance = new Chance();
var Dwelling;
(function (Dwelling) {
    Dwelling["Rambler"] = "Rambler";
    Dwelling["TwoStory"] = "Two-Story";
    Dwelling["Duplex"] = "Duplex";
})(Dwelling || (Dwelling = {}));
var houses = createHouses(10);
function getAllHouses() {
    return houses;
}
function logFirstAvailable() {
    var firstAvailableHouse = houses.find(function (house) {
        return house.available === true;
    });
    var numberOfAvailableHouses = houses.filter(function (house) { return house.available == true; }).length;
    console.log("first available house: " + firstAvailableHouse + " \n Number of houses available: " + numberOfAvailableHouses + " \n  first available house address: " + firstAvailableHouse.address);
}
function getHousesByTypeOfDwelling(dwelling) {
    var matchingHouses = houses.filter(function (house) { return house.type == dwelling; });
    var houseAddresses = [];
    matchingHouses.forEach(function (house) {
        houseAddresses.push(house.address);
    });
    return houseAddresses;
}
function logHouseAddresses() {
    var houses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        houses[_i] = arguments[_i];
    }
    houses.forEach(function (house) {
        console.log("address: " + house.address);
    });
}
function createHouses(amt) {
    var HOUSES = [];
    for (var i = 0; i < amt; i++) {
        var newHouse = {
            address: chance.address(),
            rooms: chance.integer(),
            baths: chance.integer(),
            feet: chance.floating(),
            available: chance.bool(),
            type: chance.pick(Object.values(Dwelling))
        };
        HOUSES.push(newHouse);
    }
    return HOUSES;
}
console.log("getAllHouses(): " + console.log(getAllHouses()) + " \n\n  logFirstAvailable(): " + console.log(logFirstAvailable()) + " \n\n  getHousesByTypeOfDwelling(Dwelling.Rambler): " + console.log(getHousesByTypeOfDwelling(Dwelling.Rambler)) + " \n\n  logHouseAddresses(): " + console.log(logHouseAddresses.apply(void 0, houses)) + "\n  )}\n\n");
