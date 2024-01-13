import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Theme } from './types/Theme';
import { Post } from './types/Post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { 

  }

  getPosts(limit?: number) {
    return this.http.get<Post[]>(`${environment.baseUrl}/posts${limit ? `?limit=${limit}` : ''}`)
  }

  getThemes() {
    return this.http.get<Theme[]>(`${environment.baseUrl}/themes`)
  }


}
