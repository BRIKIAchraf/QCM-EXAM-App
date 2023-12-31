import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }
  createUser(model: any) {
    return this.http.post(environment.baseApi + 'students', model)
  }
  getUsers(type: string) {
    return this.http.get(environment.baseApi + 'students')
  }
  login(model: any) {
    return this.http.put(environment.baseApi + 'login/1', model)
  }
}
