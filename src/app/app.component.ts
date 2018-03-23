import { Component } from '@angular/core';
import { CATEGORIES } from './data/data.categories';
import { PRODUCTS } from './data/data.products';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories: any[] = [];
  products: any[] = [];

  constructor() {
    this.categories = CATEGORIES.slice(0);
    this.products = PRODUCTS.slice(0);

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

    this.getByCategory(1);

  }

  getByCategory(id: number) {
    console.log('ok');
    this.products = [];
    for (let i = 0; i < this.products.length; i++) {

      if (this.products[i].sublevel_id === id) {

        console.log(this.products[i]);

      }

    }

  }
}
