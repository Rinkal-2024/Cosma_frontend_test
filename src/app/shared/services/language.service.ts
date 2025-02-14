import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageUrl = `${environment.serverUrl}/auth/add-language`;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  updateLanguage(language: string): Observable<unknown> {
    const id = localStorage.getItem('userId')
    console.log(id , "data ")
    const token = this.cookieService.get('jwt');
    this.cookieService.set('jwt', token);
    if (!token) {
      throw new Error('JWT token is missing');
    }
    const payload = { language, token };

    return this.http.post(`${this.languageUrl}/${id}`, payload);
  }
}
