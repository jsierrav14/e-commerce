import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES } from '../data/data.categories';
import { PRODUCTS } from '../data/data.products';

@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['./product.list.component.scss']

})

export class ProductListComponent implements OnInit {

    categories: any[] = [];
    products: any[] = [];
    dataProducts: any[] = [];
    productsCart: any[] = [];

    id: number;
    name: string;
    amount: number = 0;
    total: number = 0;

    constructor(private activeRouted: ActivatedRoute, private router: Router) {

        this.products = PRODUCTS.slice(0);
        console.log(this.products);
    }


    ngOnInit() {
        this.id = this.activeRouted.snapshot.params['id'];
        this.name = this.activeRouted.snapshot.params['name'];
        console.log(this.id);

        this.getByCategory(this.id);

        if (localStorage.getItem('amount') !== "0") {
             const amountaux = localStorage.getItem('amount');
             this.amount = parseInt(amountaux.toString());
        }

    }

    addToCart(product: any) {

        this.productsCart.push(product);
        this.amount++;
        this.total = this.total + product.price;
        console.log(this.total);

        localStorage.setItem('products', JSON.stringify(this.productsCart));
        localStorage.setItem('amount', this.amount.toString());
        localStorage.setItem('total', this.total.toString());
    }

    getByCategory(id: number) {
        this.dataProducts = [];
        for (let i = 0; i < this.products.length; i++) {

            if (this.products[i].sublevel_id == id) {
                console.log('ok');
                this.dataProducts.push(this.products[i]);

            }

        }

        console.log('ok', this.dataProducts);


    }
    goToCar() {
        this.router.navigate(['car']);
    }
}