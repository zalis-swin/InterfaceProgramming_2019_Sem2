import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetServiceService } from '../planet-service.service';

@Component({
  selector: 'planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  constructor(private planetService: PlanetServiceService) { }

  ngOnInit() {
  }

  planetName: string;
  planetMoons: number;
  planetDistance: number;

  createPlanet() {
    // planet = new Planet(this.planetName, this.planetMoons, this.planetDistance);
    console.log(this.planetService);
    this.planetService.addPlanet(new Planet(this.planetName, this.planetMoons, this.planetDistance));
    this.planetName = '';
    this.planetMoons = null;
    this.planetDistance = null;
  }

}
