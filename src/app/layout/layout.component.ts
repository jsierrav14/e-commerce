import { Component } from '@angular/core';

import * as $ from 'jquery';
import { Router } from '@angular/router';
import { CATEGORIES } from '../data/data.categories';
import { PRODUCTS } from '../data/data.products';
@Component({
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

    categories: any[] = [];
    products: any[] = [];
    dataProducts: any[] = [];
    productsJson: any[] = [];

    productsCart: any[] = [];

    id: number;
    name: string;
    amount: number = 0;
    total: number = 0;
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

        const amountaux = localStorage.getItem('amount');
        if (amountaux) {

            this.amount = parseInt(amountaux.toString());
        }




    }


    goToCategory(id: number) {

        this.router.navigate(['category/', id]);
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
    listAll() {
        this.dataProducts = this.products;
    }

    order(event) {
        console.log(event.target.value);

        if (event.target.value !== 'name') {

            this.products.sort(function (a, b) {
                return (b[event.target.value] - a[event.target.value]);
            });
        } else {

            this.products.sort(function (a, b) {
                const textA = a.name.toUpperCase();
                const textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })

        }
    }


    addToCar(product: any) {

        const productsAux = localStorage.getItem('products');
        product['amount'] = 1;
        console.log(product);
        if (productsAux) {
            this.productsCart = JSON.parse(productsAux);

        }
        this.productsCart.push(product);
        this.amount++;
        this.total = this.total + product.price;
        console.log(this.total);

        localStorage.setItem('products', JSON.stringify(this.productsCart));
        localStorage.setItem('amount', this.amount.toString());
        localStorage.setItem('total', this.total.toString());
    }

    goToCar() {
        this.router.navigate(['car']);
    }
}
