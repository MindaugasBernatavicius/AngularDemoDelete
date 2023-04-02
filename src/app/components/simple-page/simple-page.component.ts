import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-page',
  template: `<p class="main main-paragraph">{{ title }} app says hello </p>`
})
export class SimplePageComponent {
  title = 'My Awesome !!';
}
