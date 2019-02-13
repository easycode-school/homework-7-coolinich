import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.apiUrl}/users`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  editUser(updateUser: User): Observable<object> {
    // return this.http.get<User>(`${this.apiUrl}/users/${id}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8'
      })
    };
    return this.http.put(`${this.apiUrl}/users/${updateUser.id}`, updateUser, httpOptions);
  }

  navigateToUsersPage() {
    this.router.navigate(['/users']);
  }
}
