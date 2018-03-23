import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailsComponent } from "./product/product-details.component";
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
    { path: 'category/:id', component: ProductListComponent },
    { path: 'product/:id/details', component: ProductDetailsComponent }
];