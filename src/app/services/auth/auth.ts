import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://127.0.0.1:8080/api/';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginUrl = this.baseUrl + 'v1/auth/login';

    // corps de la requête
    const body = {
      email: email,
      password: password,
    };

    // POST vers l'API
    return this.http.post(loginUrl, body);
  }
}
