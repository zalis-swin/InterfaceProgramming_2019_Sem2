import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';
import { PlanetServiceService } from '../planet-service.service';

@Component({
  selector: 'planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @Input() planetDetail: Planet;
  editable: boolean;

  constructor(public planetService: PlanetServiceService) { }

  ngOnInit() {
    this.editable = false;
  }

  askToDeletePlanet() {
    this.planetService.deletePlanet(this.planetDetail)
  }

  showInput() {
    this.editable = true;
  }

  savePlanet() {
    this.editable = false;
  }

}
