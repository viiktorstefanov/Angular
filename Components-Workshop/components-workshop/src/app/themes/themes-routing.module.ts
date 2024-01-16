import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeDetailsComponent } from './details/details.component';
import { AuthActivate } from '../core/guards/auth.activate';



const routes: Routes = [
  {
    path: 'themes',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: MainComponent,
        },
        {
            path: ':themeId',
            component: ThemeDetailsComponent
        }
    ]
  },
  {
    path: 'add-theme',
    component: AddThemeComponent,
    canActivate: [AuthActivate]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesRoutingModule { }
