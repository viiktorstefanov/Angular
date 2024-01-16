import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { ThemeDetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AddThemeComponent,
    ThemeDetailsComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule { }
