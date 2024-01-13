import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/Post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  postList: Post[] = [];
  isLoading : boolean = true;

  constructor(private apiService:  ApiService  ) {
  }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(({
      next: (posts) => {
        this.postList = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
        
      }
    }))
  }
}
