import { Component } from '@angular/core';
import { Trail } from '../../core/models/trail.model';
import { TrailService } from '../../core/services/trail.service';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.html',
  styleUrls: ['./trails.scss'],
  standalone: false
})
export class TrailsComponent {
  trails: Trail[] = [];
  
    constructor(private service: TrailService) {}
  
    ngOnInit(): void {
      this.service.getAll().subscribe(res => {
        this.trails = res;
      });
    }

    trackByTrail = (_: number, t: Trail) => t.id;

}
