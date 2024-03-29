import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './posts-list/post-item/post-item.component';
import { ThemeItemComponent } from './themes-list/theme-item/theme-item.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ThemesModule } from './themes/themes.module';
import { DefaultComponent } from './default/default.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'; 



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListComponent,
    PostsListComponent,
    PostItemComponent,
    ThemeItemComponent,
    HomeComponent,
    DefaultComponent,
    WelcomeComponent,
    ToolbarComponent,
  ],
  imports: [
    UserModule,
    ThemesModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
