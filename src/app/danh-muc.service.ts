import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {

  constructor(private httpClient: HttpClient) { }

  getCategory(): Observable <any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/customers`);
  }
  addCategory(firstName: string, lastName: string): Observable<any> {
    // this.categories.push(name);
    const category = {
      firstName,
      lastName
    };

    console.log(category);
    return this.httpClient.post<any>(`http://localhost:8080/customers`, category);
  }
  deleteCategory(id): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/delete-customers/` + id);
  }
  editCategory(firstName: string, lastName: string, id: number): Observable<any> {
    const category = {
      firstName,
      lastName,
      id
    };
    console.log(category);
    return this.httpClient.put<any>(`http://localhost:8080/customers/` + id , category);
  }
  updateCategory(id): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/customers/` + id);
  }
}
