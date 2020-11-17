import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_BASE: string;

  constructor(private http: HttpClient) {
    this.API_BASE = 'https://api.github.com/repos/garyayala/fulltimeforce-task';
  }

  getList(): Observable<any>{
    return this.http.get<any>(`${this.API_BASE}/commits`);
  }

  get(sha: string): Observable<any>{
    return this.http.get<any>(`${this.API_BASE}/commits/${sha}`);
  }
}
