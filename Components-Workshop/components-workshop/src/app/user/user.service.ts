import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  get isLogged() : boolean {
    return !!this.user;
  }

  constructor() { 
    try {
      const lsUser = localStorage.getItem('[user]') || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'viktor@abv.bg',
      firstName: 'Viktor',

    };

    localStorage.setItem('[user]', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('[user]');
  }
}
