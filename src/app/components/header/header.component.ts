import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // template: `<p>header works! {{ someText }}</p>`,
  // templateUrl: './header.component.html',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src='https://getbootstrap.com/{{imgUrl}}' alt="" width="30" height="24">
    </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a class="nav-link" href="/simplepage">Simple Page</a> -->
            <a class="nav-link" [routerLink]="['/simplepage']">Simple Page</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="/ngifexample">Ng If Example</a> -->
            <a class="nav-link" [routerLink]="['/ngifexample']">Ng If Example</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="/ngforexample">Ng For Example</a> -->
            <a class="nav-link" [routerLink]="['/ngforexample']">Ng For Example</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="/bmicalc">Bmi Calculator</a> -->
            <a class="nav-link" [routerLink]="['/bmicalc']">Bmi Calculator</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imgUrl = 'docs/5.0/assets/brand/bootstrap-logo.svg';
}
