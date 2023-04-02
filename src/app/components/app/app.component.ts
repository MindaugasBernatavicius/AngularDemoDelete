import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    <div class="container">
      <!-- <app-simple-page></app-simple-page> -->
      <!-- <app-ngif-example-page></app-ngif-example-page> -->
      <!-- <app-ng-for-example-page></app-ng-for-example-page> -->
      <!-- <img height="60" src="https://static.vecteezy.com/system/resources/previews/007/749/084/original/skull-crossbones-danger-icon-danger-symbol-skull-free-vector.jpg" > -->
      <!-- <app-bmi-calculator></app-bmi-calculator> -->
      <!-- <p class="main-paragraph">Some text</p> -->

      <router-outlet></router-outlet>
    </div>
    <!-- <app-footer></app-footer> -->
  `,
  styleUrls: ['./app.component.css']
  // styles: ['.main-paragraph { font-family: Arial, Helvetica, sans - serif; color: red;}']
})
export class AppComponent {
}
