import { Component, OnInit } from '@angular/core';
import { PlanetServiceService } from '../planet-service.service';

@Component({
  selector: 'planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  constructor(public planetService: PlanetServiceService) { }

  ngOnInit() {
  }

  askToSortPlanets() {
    this.planetService.sortPlanets();
  }

}
