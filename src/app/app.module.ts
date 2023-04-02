import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { NgifExamplePageComponent } from './components/ngif-example-page/ngif-example-page.component';
import { NgForExamplePageComponent } from './components/ng-for-example-page/ng-for-example-page.component';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SimplePageComponent,
    NgifExamplePageComponent,
    NgForExamplePageComponent,
    BmiCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'simplepage', component: SimplePageComponent }, // http://localhost:4200/simplepage
      { path: 'ngifexample', component: NgifExamplePageComponent },
      { path: 'ngforexample', component: NgForExamplePageComponent },
      { path: 'bmicalc', component: BmiCalculatorComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
