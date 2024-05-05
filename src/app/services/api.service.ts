import { Injectable } from '@angular/core';
// services/api.service.ts
// services/api.service.ts
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<any[]>(`http://localhost:8000/products`);
  }
}
