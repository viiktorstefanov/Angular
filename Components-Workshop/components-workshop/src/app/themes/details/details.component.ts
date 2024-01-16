import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/Theme';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class ThemeDetailsComponent implements OnInit{
  
  theme: Theme | undefined;
  
  constructor( private api: ApiService, private activatedRoute: ActivatedRoute, private userService: UserService ) {

  }

  get isLogged() : boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.getTheme();
  }

  getTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];

    this.api.getTheme(id).subscribe(t => {
      this.theme = t;
    })
  }
}
