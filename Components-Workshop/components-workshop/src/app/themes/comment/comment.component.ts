import { Component, Input } from '@angular/core';
import { Post } from '../../types/Post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() post: Post = {
    likes: [],
  _id: '',
  text: '',
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
  themeId: {
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
  },
  created_at: '',
  updatedAt: '',
  __v: 0,
  }

  
}
