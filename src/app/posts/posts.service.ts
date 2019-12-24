import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; // this would make the original array immutable
  }

  addPost(title: string, content: string) {
    const post: Post = { title, content }; // es6 shorthand for {title: title, content: content}
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
