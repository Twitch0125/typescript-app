import { log } from "util";

const Chance = require("chance");

const chance = new Chance();

enum Dwelling {
  Rambler = "Rambler",
  TwoStory = "Two-Story",
  Duplex = "Duplex"
}

interface House {
  address: string;
  rooms: number;
  baths: number;
  feet: number;
  available: boolean;
  type: Dwelling;
}

const houses: House[] = createHouses(10);

function getAllHouses(): House[] {
  return houses;
}

function logFirstAvailable(): void {
  let firstAvailableHouse: House = houses.find(house => {
    return house.available === true;
  });
  let numberOfAvailableHouses: number = houses.filter(
    house => house.available == true
  ).length;
  console.log(
    `first available house: ${firstAvailableHouse} \n Number of houses available: ${numberOfAvailableHouses} \n  first available house address: ${
      firstAvailableHouse.address
    }`
  );
}

function getHousesByTypeOfDwelling(dwelling: Dwelling): string[] {
  let matchingHouses: House[] = houses.filter(house => house.type == dwelling);
  let houseAddresses: string[] = [];
  matchingHouses.forEach(house => {
    houseAddresses.push(house.address);
  });
  return houseAddresses;
}

function logHouseAddresses(...houses: any[]): void {
  houses.forEach(house => {
    console.log(`address: ${house.address}`);
  });
}

function createHouses(amt: number): House[] {
  let HOUSES: House[] = [];
  for (let i = 0; i < amt; i++) {
    let newHouse: House = {
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

console.log(`getAllHouses(): ${console.log(getAllHouses())} \n
  logFirstAvailable(): ${console.log(logFirstAvailable())} \n
  getHousesByTypeOfDwelling(Dwelling.Rambler): ${console.log(
    getHousesByTypeOfDwelling(Dwelling.Rambler)
  )} \n
  logHouseAddresses(): ${console.log(logHouseAddresses(...houses))}
  )}\n
`);
