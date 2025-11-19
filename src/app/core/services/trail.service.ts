import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Trail } from '../models/trail.model';
import { AIAnalyzeTrails } from '../models/ai-analyze-trail-model';

@Injectable({ providedIn: 'root' })
export class TrailService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<Trail[]> {
        const result = this.http.get<Trail[]>(`${environment.API_URL}/trails`);
        return result;
    }

    getById(id: number): Observable<Trail> {
        return this.http.get<Trail>(`${environment.API_URL}/trails/${id}`);
    }

    analyzeWithAI(): Observable<AIAnalyzeTrails> {
        return this.http.get<AIAnalyzeTrails>(`${environment.API_URL}/trails/ai-analyze`);
    }

}
