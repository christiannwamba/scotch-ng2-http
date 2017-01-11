import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { CommentBoxComponent } from './Components/comment-box.component';
import { CommentListComponent } from './Components/comment-list.component';
import { CommentFormComponent } from './Components/comment-form.component';
import { CommentComponent } from './Components/index';


import { CommentService } from './Services/comment.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    
  ],
  declarations: [
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ],

  providers: [
      CommentService
  ],

  exports:[
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ]
  
})
export class CommentModule {
}

