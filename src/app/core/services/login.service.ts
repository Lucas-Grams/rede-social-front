import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
      private httpClient: HttpClient
  ) {

  }


  login(email: string, password: string) {
      return this.httpClient.post('http://localhost:8080/login', {email, password});
  }
}
