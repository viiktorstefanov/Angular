import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { ThemeDetailsComponent } from './details/details.component';
import { CommentComponent } from './comment/comment.component';
import { AnswerCommentComponent } from './answer-comment/answer-comment.component';



@NgModule({
  declarations: [
    AddThemeComponent,
    ThemeDetailsComponent,
    CommentComponent,
    AnswerCommentComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule { }
