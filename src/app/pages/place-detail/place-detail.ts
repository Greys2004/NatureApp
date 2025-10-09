import { Component, OnInit } from '@angular/core';
import { Place } from '../../core/models/place.model';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../core/services/place.service';
import { environment } from '../../../environments/environment.development';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.html',
  styleUrls: ['./place-detail.scss'],
  standalone: false
})
export class PlaceDetailComponent implements OnInit {

  place?: Place;
  private map?: mapboxgl.Map;

  constructor(private route: ActivatedRoute, private service: PlaceService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(p => {
      this.place = p;
      if (p?.longitude != null && p?.latitude != null) {
        (mapboxgl as any).accessToken = environment.MAPBOX_TOKEN;
        this.map = new mapboxgl.Map({
          container: 'mini-map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [p.longitude, p.latitude],
          zoom: 12
        });
        new mapboxgl.Marker().setLngLat([p.longitude, p.latitude]).addTo(this.map);
      }
    });
  }

}
