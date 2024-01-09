import { User } from './types/User';

export class UserService {

  users : User[] = [
    {
      name: 'Ivan',
      age: 15,
    },
    {
      name: 'Gosho',
      age: 20,
    },
    {
      name: 'Petur',
      age: 25,
    },
    {
      name: 'Ani',
      age: 18,
    }
  ];


  submitHandler(firstName : HTMLInputElement, age: HTMLInputElement) {
    this.users = [...this.users, { name: firstName.value, age: Number(age.value)}]

    firstName.value = '';
    age.value = '';
  }
}
