import { Component, Input } from '@angular/core';
import { Post } from '../../types/Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
})
export class PostItemComponent {
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
  };
}
