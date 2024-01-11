import { Injectable } from '@angular/core';
import { User } from './types/User';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  users : User[] = [];

  constructor(private http: HttpClient) {

  }

  addUser(username: HTMLInputElement, age: HTMLInputElement) {
    this.users = [...this.users, { name: username.value, age: Number(age.value)}];
  };

  deleteUser(name: string) {
    this.users = this.users.filter(x => x.name !== name);
  };

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
