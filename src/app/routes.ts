import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailsComponent } from "./product/product-details.component";
import { CarComponent } from "./car/car.component";

import { Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
export const appRoutes: Routes = [
    { path: '', component: LayoutComponent},
    { path: 'category/:id/:name', component: ProductListComponent },
    { path: 'product/:id/details', component: ProductDetailsComponent },
    { path: 'car', component: CarComponent }

];