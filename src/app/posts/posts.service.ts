import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return this.posts; // not the cleanest solution but works
  }

  addPost(title: string, content: string) {
    const post: Post = { title, content }; // es6 shorthand for {title: title, content: content}
    this.posts.push(post);
  }
}
