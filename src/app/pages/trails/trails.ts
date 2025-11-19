import { Component } from '@angular/core';
import { Trail } from '../../core/models/trail.model';
import { TrailService } from '../../core/services/trail.service';
import { AIAnalyzeTrails } from '../../core/models/ai-analyze-trail-model';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.html',
  styleUrls: ['./trails.scss'],
  standalone: false
})
export class TrailsComponent {
  trails: Trail[] = [];
  loadingAI = false;
  modalVisible = false;
  aiAnalysis: AIAnalyzeTrails | null = null;
  
  constructor(private service: TrailService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(res => {
      this.trails = res;
    });
  }

  trackByTrail = (_: number, t: Trail) => t.id;

  analyzeTrails() {
    this.loadingAI = true;
    this.modalVisible = false;

    this.service.analyzeWithAI().subscribe({
      next: (res) => {
        this.aiAnalysis = res;
        this.loadingAI = false;
        this.modalVisible = true;
      },
      error: (err) => {
        console.error('Error al analizar senderos con IA', err);
        this.loadingAI = false;
      }
    });
  }
}
