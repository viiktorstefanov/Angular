import { Component, Input } from '@angular/core';
import { Theme } from '../../types/Theme';

@Component({
  selector: 'app-theme-item',
  templateUrl: './theme-item.component.html',
  styleUrl: './theme-item.component.css'
})
export class ThemeItemComponent {
@Input() theme: Theme = {
  subscribers: [],
  posts: [],
  _id: '',
  themeName: '',
  userId: {
    themes: [],
    posts: [],
    _id: '',
    tel: '',
    email: '',
    username: '',
    password: '',
    created_at: '',
    updatedAt: '',
    __v: 0,
  },
  created_at: '',
  updatedAt: '',
  __v: 0,
};
}
