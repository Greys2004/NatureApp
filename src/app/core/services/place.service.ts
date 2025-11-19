import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';
import { environment } from '../../../environments/environment';
import { AIAnalyzePlaces } from '../models/ai-analyze-place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(
      private httpClient : HttpClient
  ) {}

  getAll(): Observable<Place[]> {
  const result = this.httpClient.get<Place[]> (`${environment.API_URL}/place`);
  return result;
}

  getById(id: number): Observable<Place> {
    return this.httpClient.get<Place>(`${environment.API_URL}/place/${id}`);
  }

  analyzeWithAI(): Observable<AIAnalyzePlaces> {
    return this.httpClient.get<AIAnalyzePlaces>(`${environment.API_URL}/place/ai-analyze`);
  }

}
