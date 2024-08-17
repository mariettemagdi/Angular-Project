import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number) {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
