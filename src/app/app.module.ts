import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrderContactsPipe} from './pipes/order-by.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http-interceptor.service";
import {NumericFormatDirective} from './directives/numeric-format.directive';
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    OrderContactsPipe,
    NumericFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    OrderContactsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
