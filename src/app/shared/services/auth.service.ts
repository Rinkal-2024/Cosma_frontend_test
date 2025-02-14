import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.serverUrl}/auth/fetch-users`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    const loginData = { username: username, password: password};
    return this.http.post<User>(this.loginUrl, loginData);
  }
}
