import { Component } from '@angular/core';
import { FreeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId = 3;
  postId = 1;
  listComments: Comments[];
  listPosts: Posts[];
  objPosts: Posts;
  objPuts: Posts;

  constructor(private freeApiService: FreeApiService) { }

  ngOnInit() {
    this.freeApiService.getComments()
      .subscribe(data => {
        this.listComments = data;
      });

    this.freeApiService.getCommentsByParameters(this.userId)
      .subscribe(data => {
        this.listPosts = data;
      });

    let myPost = new Posts();
    myPost.body = 'test Body';
    myPost.title = 'testTitle';
    myPost.userId = 5;

    this.freeApiService.createPost(myPost)
      .subscribe(data => {
        this.objPosts = data;
      });


    let updatePosts = new Posts();
    updatePosts.body = "test Update";
    updatePosts.title = "Update Title";
    updatePosts.userId = 3;

    this.freeApiService.updatePost(this.postId, updatePosts)
      .subscribe(data => {
        this.objPuts = data;
      });
  }



}
