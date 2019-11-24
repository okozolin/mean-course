import { Component } from "@angular/core";
@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html"
})
export class PostCreateComponent {
  newPost = "NO CONTENT";
  onAddPost(postInput: HTMLAreaElement) {
    console.dir(postInput);
    this.newPost = postInput.value;
  }
}
