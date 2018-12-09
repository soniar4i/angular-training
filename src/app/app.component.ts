import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = {
    title : 'Deep dive Angular course'
  }

  onLogoClick() {
    console.log('Hello World!');
  }

  onKeyup(newTitle: string) {
    this.data.title = newTitle;
  }
}