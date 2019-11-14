import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetServiceService {

  constructor() { }

  listofPlanets: Planet[] = [];

  addPlanet(planet: Planet) {
    this.listofPlanets.push(planet);
  }

  compare(a, b) {
    if (a.distancefromSun < b.distancefromSun) {
      return -1;
    }
    if (a.distancefromSun > b.distancefromSun) {
      return 1;
    }
    return 0;
  }

  sortPlanets() {
    this.listofPlanets.sort(this.compare)
  }

  deletePlanet(planet: Planet) {
    let index = this.listofPlanets.indexOf(planet)
    this.listofPlanets.splice(index, 1);
  }

}
