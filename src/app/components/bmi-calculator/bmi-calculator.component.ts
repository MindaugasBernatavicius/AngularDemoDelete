import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  template: `
    <br>
    <p>BMI calculator</p>
    <input type="number" [(ngModel)]="weight"><br>
    <input type="number" [(ngModel)]="height"><br>
    <p *ngIf="showResult">Your BMI: {{ bmi }} {{ (bmi <= 18.5 || bmi >24.9 ? '😔' : '😃') }}</p><br>
    <div class="alert alert-warning" role="alert" *ngIf="showAlert">Please enter valid values for weight and height</div>
    <button class="btn btn-info" (click)="performCalculation()">Calculate</button>
  `,
  styleUrls: []
})
export class BmiCalculatorComponent {
  // TODO
  // ... implement images for intuitive result understanding (show a sad image / tragic image if the person has unhealthy BMI)
  // ... implement labels for input fields
  // ... styling: decrease the warning sign, center the BMI calculator
  // ... and think about what else could be improved

  weight = 0; height = 0; bmi = 0;
  showResult = false;
  showAlert = false;

  performCalculation = (): void => {
    if (this.weight <= 0 || this.height <= 0) {
      this.showAlert = true;
      this.showResult = false;
      return;
    }

    this.bmi = this.weight / (this.height * this.height)
    this.showResult = true;
    this.showAlert = false;
  }
}
