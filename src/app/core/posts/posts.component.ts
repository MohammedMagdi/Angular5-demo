
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { AppError } from '../../common/app-errors';
import { BadInput } from '../../common/bad-input';
import { NotFoundError } from '../../common/not-found-error';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => { this.posts = posts; });
    // console.log('posts', this.posts);
  }

  createPost(input: HTMLInputElement) {
    if (input.value !== '' && input.value !== undefined) {
      const post = { title: input.value };
      this.posts.splice(0, 0, post);

      input.value = '';

      this.service.create(post)
        .subscribe(
          newPost => {
            post['id'] = newPost.id;
          },
          (error: AppError) => {
            this.posts.splice(0, 1);

            if (error instanceof BadInput) {
              // this.form.setErrors(error.originalError);
            } else { throw error; }

          });
    }

  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }


  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post has already deleted.');
          } else { throw error; }
        });
  }


}
