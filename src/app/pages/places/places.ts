import { Component, OnInit } from '@angular/core';
import { Place } from '../../core/models/place.model';
import { PlaceService } from '../../core/services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.html',
  styleUrls: ['./places.scss'],
  standalone: false
})
export class PlacesComponent implements OnInit {
  places: Place[] = [];

  constructor(private service: PlaceService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      this.places = res;
    });
  }
  trackByPlace = (_: number, p: Place) => p.id;

}
