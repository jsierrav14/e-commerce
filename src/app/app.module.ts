import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailsComponent } from './product/product-details.component';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
