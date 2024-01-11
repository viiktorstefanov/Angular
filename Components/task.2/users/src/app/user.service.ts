import { HttpClient } from '@angular/common/http';
import { User } from './types/User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users : User[] = [];

  constructor(private http: HttpClient ) {

  }


  submitHandler(firstName : HTMLInputElement, age: HTMLInputElement) {
    this.users = [...this.users, { name: firstName.value, age: Number(age.value)}]

    firstName.value = '';
    age.value = '';
  }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
