import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-example-page',
  template: `
    <label *ngIf="isMessageShown">{{text}}</label><br>
    <button class="btn btn-danger" (click)="toggleMessage()">Show message!</button>
  `
})
export class NgifExamplePageComponent {

  text = "Label text";
  isMessageShown = false;

  toggleMessage = (): void => { this.isMessageShown = !this.isMessageShown; }

  // toggleMessage(): void {
  //   // if (this.isMessageShown == true) this.isMessageShown = false; else this.isMessageShown = true;
  //   // this.isMessageShown = this.isMessageShown == true ? false : true;
  //   this.isMessageShown = !this.isMessageShown;
  // }
}
