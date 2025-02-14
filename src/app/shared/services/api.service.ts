import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

enum EndpointRoutes {
}

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private http: HttpClient) {
  }

}
