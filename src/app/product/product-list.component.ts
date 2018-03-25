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
    productAux:any[] = [];
    productsCart: any[] = [];

    id: number;
    name: string;
    amount: number = 0;
    total: number = 0;

    constructor(private activeRouted: ActivatedRoute, private router: Router) {

        this.id = this.activeRouted.snapshot.params['id'];
        this.name = this.activeRouted.snapshot.params['name'];
        this.products = PRODUCTS.slice(0);
        console.log(this.products);
        const productsAux = localStorage.getItem('products');
        if (productsAux) {

            this.productsCart = JSON.parse(productsAux);
            console.log(this.productsCart);
        }
    }


    ngOnInit() {
     
        console.log(this.id);

        this.getByCategory(this.id);


        const amountaux = localStorage.getItem('amount');
        if (amountaux) {
            this.amount = parseInt(amountaux.toString());
        }

    }

    addToCart(product: any) {

   
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

    listAll(){
       this.getByCategory(this.id);
    }


    order(event) {
        console.log(event.target.value);

        if (event.target.value !== 'name') {

            this.dataProducts.sort(function (a, b) {
                return (b[event.target.value] - a[event.target.value]);
            });
        } else {

            this.dataProducts.sort(function (a, b) {
                const textA = a.name.toUpperCase();
                const  textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })

        }
    }

    searchByName(value: any) {
        console.log(value);
        this.productAux = [];

        for (let i = 0; i < this.dataProducts.length; i++) {

            if (this.dataProducts[i].name == value) {

                this.productAux.push(this.dataProducts[i]);

            }

        }
        this.dataProducts = this.productAux;
        console.log(this.dataProducts);
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