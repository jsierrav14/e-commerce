import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailsComponent } from './product/product-details.component';
import * as $ from 'jquery';
import { LayoutComponent } from './layout/layout.component';
import { CarComponent } from './car/car.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
