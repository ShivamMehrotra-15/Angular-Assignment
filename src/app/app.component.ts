import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-one';
  public paragraph =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sequi vel facere eum. Esse quaerat, dolorem a eos nobis non incidunt autem ea modi in? Dolor saepe aut earum eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sequi vel facere eum. Esse quaerat, dolorem a eos nobis non incidunt autem ea modi in? Dolor saepe aut earum eaque.';

  public isParagrapVisible = true;
  public noOfClicks = 0;
  public list: string[] = [];

  public addedText = '';

  handleParagraphVisible() {
    this.isParagrapVisible = !this.isParagrapVisible;
    this.noOfClicks = this.noOfClicks + 1;
  }

  addText() {
    this.list.push(this.addedText);
    this.addedText = '';
  }
}
