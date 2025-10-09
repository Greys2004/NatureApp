import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Trail } from '../models/trail.model';

@Injectable({ providedIn: 'root' })
export class TrailService {

    constructor(private http: HttpClient) {}

    getAll(placeId?: number, difficulty?: string): Observable<Trail[]> {
        let params = new HttpParams();
        if (placeId) params = params.set('placeId', placeId);
        if (difficulty) params = params.set('difficulty', difficulty);
        return this.http.get<Trail[]>(`${environment.API_URL}/trails`, { params });
    }

    getById(id: number): Observable<Trail> {
        return this.http.get<Trail>(`${environment.API_URL}/trails/${id}`);
    }
}
