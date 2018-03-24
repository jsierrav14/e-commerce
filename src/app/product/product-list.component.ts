import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    total: number;

    constructor(private activeRouted: ActivatedRoute) {

        this.products = PRODUCTS.slice(0);
        console.log(this.products);
    }


    ngOnInit() {
        this.id = this.activeRouted.snapshot.params['id'];
        this.name = this.activeRouted.snapshot.params['name'];
        console.log(this.id);

        this.getByCategory(this.id);

    }

    addToCart(product: any) {

        this.productsCart.push(product);
        this.amount++;
        this.total += product.price;
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
}