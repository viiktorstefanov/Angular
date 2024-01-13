import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/Theme';
import { log } from 'console';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent implements OnInit {

  themesList: Theme[] = [];
  isLoading : boolean = true;

  constructor( private apiService : ApiService ) {

  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
        
      }
    })
  }

}
