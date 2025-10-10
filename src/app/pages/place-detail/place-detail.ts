import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Place } from '../../core/models/place.model';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../core/services/place.service';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.html',
  styleUrls: ['./place-detail.scss'],
  standalone: false
})
export class PlaceDetailComponent implements OnInit {
  @ViewChild('miniMap') miniMapEl?: ElementRef<HTMLDivElement>;
  place?: Place;
  private map?: mapboxgl.Map;

  constructor(
    private route: ActivatedRoute,
    private service: PlaceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(p => {
      this.place = p;
      this.cdr.detectChanges();

      if (this.miniMapEl && p?.longitude != null && p?.latitude != null) {
        const token = environment.MAPBOX_TOKEN;

        this.map = new mapboxgl.Map({
          accessToken: token, 
          container: this.miniMapEl.nativeElement,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [p.longitude, p.latitude],
          zoom: 12
        });

        new mapboxgl.Marker()
          .setLngLat([p.longitude, p.latitude])
          .addTo(this.map);
      }
    });
  }
}
