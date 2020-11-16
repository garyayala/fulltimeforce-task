import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_BASE: string;
  private ACCESS_TOKEN: string;

  constructor(private http: HttpClient) {
    this.API_BASE = 'https://api.github.com/repos/garyayala/fulltimeforce-task';
    this.ACCESS_TOKEN = environment.accessToken;
  }

  getUserInfo(): Observable<any>{
    return this.http.get<any>(`https://github.com/user`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.ACCESS_TOKEN}`)
    });
  }

  getList(): Observable<any>{
    return this.http.get<any>(`${this.API_BASE}/commits`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.ACCESS_TOKEN}`)
                                .set('Accept', `application/vnd.github.cloak-preview+json`)
    });
  }

  get(sha: string): Observable<any>{
    return this.http.get<any>(`${this.API_BASE}/commits/${sha}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.ACCESS_TOKEN}`)
                                .set('Accept', `application/vnd.github.cloak-preview+json`)
    });
  }
}
