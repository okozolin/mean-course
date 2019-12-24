import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  // myposts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  myposts: Post[] = [];

  // dependency injection - injecting the service -
  // adding 'public' will automaticly create the variable 'postService' on the class
  // and save the instance created by the constructor there. it is typescript feature
  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.myposts = this.postsService.getPosts();
    this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.myposts = posts;
    });
  }
}
