import { Component, OnInit } from '@angular/core';
import { Place } from '../../core/models/place.model';
import { PlaceService } from '../../core/services/place.service';
import { AIAnalyzePlaces } from '../../core/models/ai-analyze-place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.html',
  styleUrls: ['./places.scss'],
  standalone: false
})
export class PlacesComponent implements OnInit {
  places: Place[] = [];
  loadingAI = false;
  modalVisible = false;
  aiAnalysis: AIAnalyzePlaces | null = null;

  constructor(private service: PlaceService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      this.places = res;
    });
  }
  trackByPlace = (_: number, p: Place) => p.id;

  analyzePlaces() {
    this.loadingAI = true;
    this.modalVisible = false;

    this.service.analyzeWithAI().subscribe({
      next: (res) => {
        this.aiAnalysis = res;
        this.loadingAI = false;
        this.modalVisible = true;
      },
      error: (err) => {
        console.error('Error al analizar lugares con IA', err);
        this.loadingAI = false;
      }
    });
  }

}
