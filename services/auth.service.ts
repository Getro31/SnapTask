import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = 'My fake token'

  constructor() { }

  getToken(): string {
    return this.token;
  }
}
