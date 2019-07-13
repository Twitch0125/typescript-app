import { throws } from "assert";

const Chance = require("chance");

const chance = new Chance();

enum Dwelling {
  Rambler = "Rambler",
  TwoStory = "Two-Story",
  Duplex = "Duplex"
}

interface HouseInterface {
  address: string;
  rooms: number;
  baths: number;
  feet: number;
  available: boolean;
  type: Dwelling;
  getAllHouses(): House[];
  logFirstAvailable(): void;
  getHousesByTypeOfDwelling(d: Dwelling): string[];
  logHouseAddresses(...h: House[]): void;
}

export class House implements HouseInterface {
  address: string;
  rooms: number;
  baths: number;
  feet: number;
  available: boolean;
  type: Dwelling;
  constructor(
    address: string,
    rooms: number,
    baths: number,
    feet: number,
    available: boolean,
    type: Dwelling
  ) {
    this.address = address;
    this.rooms = rooms;
    this.baths = baths;
    this.feet = feet;
    this.available = available;
    this.type = type;
  }
  getAllHouses(): House[] {
    return houses;
  }
  logFirstAvailable(): void {
    let firstAvailableHouse: House = houses.find(
      house => house.available === true
    );
    let numberOfAvailableHouses: number = houses.filter(
      house => house.available === true
    ).length;
    console.log(
      `first available house: ${firstAvailableHouse} \n Number of houses available: ${numberOfAvailableHouses} \n  first available house address: ${
        firstAvailableHouse.address
      }`
    );
  }
  getHousesByTypeOfDwelling(dwelling: Dwelling): string[] {
    let matchingHouses: House[] = houses.filter(
      house => house.type == dwelling
    );
    let houseAddresses: string[] = [];
    matchingHouses.forEach(house => {
      houseAddresses.push(house.address);
    });
    return houseAddresses;
  }
  logHouseAddresses(...houses: House[]): void {
    houses.forEach(house => {
      console.log(`address: ${house.address}`);
    });
  }
}
export let houses: House[] = createHouses(10);

// const houses: House[] = createHouses(10);

// function getAllHouses(): House[] {
//   return houses;
// }

// function logFirstAvailable(): void {
//   let firstAvailableHouse: House = houses.find(house => {
//     return house.available === true;
//   });
//   let numberOfAvailableHouses: number = houses.filter(
//     house => house.available == true
//   ).length;
//   console.log(
//     `first available house: ${firstAvailableHouse} \n Number of houses available: ${numberOfAvailableHouses} \n  first available house address: ${
//       firstAvailableHouse.address
//     }`
//   );
// }

// function getHousesByTypeOfDwelling(dwelling: Dwelling): string[] {
//   let matchingHouses: House[] = houses.filter(house => house.type == dwelling);
//   let houseAddresses: string[] = [];
//   matchingHouses.forEach(house => {
//     houseAddresses.push(house.address);
//   });
//   return houseAddresses;
// }

// function logHouseAddresses(...houses: any[]): void {
//   houses.forEach(house => {
//     console.log(`address: ${house.address}`);
//   });
// }

// let logHouseAddresses = (...houses: any[]) => (houses.forEach(house=> console.log(house.address)
// ))

export function createHouses(amt: number): House[] {
  let HOUSES: House[] = [];
  for (let i = 0; i < amt; i++) {
    let newHouse = new House(
      chance.address(),
      chance.integer(),
      chance.integer(),
      chance.floating(),
      chance.bool(),
      chance.pick(Object.values(Dwelling))
    );
    HOUSES.push(newHouse);
  }
  return HOUSES;
}

// console.log(`getAllHouses(): ${console.log(getAllHouses())} \n
//   logFirstAvailable(): ${console.log(logFirstAvailable())} \n
//   getHousesByTypeOfDwelling(Dwelling.Rambler): ${console.log(
//     getHousesByTypeOfDwelling(Dwelling.Rambler)
//   )} \n
//   logHouseAddresses(): ${console.log(logHouseAddresses(...houses))}
//   )}\n
// `);

module.exports = { House, houses, createHouses };
