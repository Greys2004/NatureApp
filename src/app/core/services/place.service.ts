import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(
      private httpClient : HttpClient
  ) {}

  getAll(category?: string, difficulty?: string): Observable<Place[]> {
  let params = new HttpParams();
  if (category) params = params.set('category', category);
  if (difficulty) params = params.set('difficulty', difficulty);

  const url = `${environment.API_URL}/place`;
  console.log('Llamando al backend:', url);
  return this.httpClient.get<Place[]>(url, { params });
}

  getById(id: number): Observable<Place> {
    return this.httpClient.get<Place>(`${environment.API_URL}/places/${id}`);
  }
}
