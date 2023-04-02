import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-example-page',
  template: `
    <!-- <table>
      <tr>
        <th>Message</th>
      </tr>
      <tr *ngFor="let message of messages">
        <td>{{ message }}</td>
      </tr>
    </table> -->
    <br>
    <table class="table table-hover" *ngIf="products.length > 0">
      <thead>
        <tr class="table-primary">
          <th scope="col">Title</th>
          <th scope="col">Count</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td>{{ product.title }}</td>
          <td>{{ product.count }}</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-warning" role="alert" *ngIf="products.length <= 0">
      We don't have any products
    </div>
  `,
  // styles: ['td, th { border: 1px solid black; }']
})
export class NgForExamplePageComponent {
  messages: Array<string> = [
    "Message1", "Message2", "Message3", "Message4"
  ];

  products: Array<any> = [
    { title: `Adidas XP2`, count: 150 },
    { title: `Nike Jordans V2`, count: 200 }
  ];
}
