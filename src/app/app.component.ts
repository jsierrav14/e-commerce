import { Component } from '@angular/core';
import { CATEGORIES } from './data/data.categories';
import { PRODUCTS } from './data/data.products';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories: any[] = [];
  products: any[] = [];
  productsCart: any[] = [];
  dataProducts: any[] = [];
  constructor(private router: Router) {
    this.categories = CATEGORIES.slice(0);
    this.products = PRODUCTS.slice(0);
    this.dataProducts = this.products;

    console.log(this.products);
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
      }
      $(this).next('.dropdown-menu').toggleClass('show');


      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass('show');
      });


      return false;
    });



  }


  goToCategory(id: number, name: string) {

    this.router.navigate(['category/', id, name]);
  }
  getByCategory(id: number) {
    console.log('ok');
    this.dataProducts = [];
    for (let i = 0; i < this.products.length; i++) {

      if (this.products[i].sublevel_id === id) {

        this.dataProducts.push(this.products[i]);

      }

    }

  }

  searchByName(value: any) {
    console.log(value);
    this.dataProducts = [];

    for (let i = 0; i < this.products.length; i++) {

      if (this.products[i].name === value) {

        this.dataProducts.push(this.products[i]);

      }

    }
    console.log(this.dataProducts);
  }

  order(p_array_json, event) {
    p_array_json.sort(function (a, b) {
      return a[event.target.value] > b[event.target.value];
    });
  }
}
