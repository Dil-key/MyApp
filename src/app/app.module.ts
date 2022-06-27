import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AdvanceCalculatorComponent } from './advance-calculator/advance-calculator.component';
import { FormCreationComponent } from './form-creation/form-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    CalculatorComponent,
    AdvanceCalculatorComponent,
    FormCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
