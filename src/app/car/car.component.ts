import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'car.component.html',
    styleUrls: ['./car.component.scss']

})

export class CarComponent implements OnInit {


    closeResult: string;

    products: any[] = [];
    amount: string;
    total: string;

    constructor(private modalService: NgbModal, private router: Router) {

    }
    ngOnInit() {
        const productsAux = localStorage.getItem('products');
        this.products = JSON.parse(productsAux);
        const auxProducts = localStorage.getItem('products');

        this.products = JSON.parse(auxProducts);
        this.amount = (localStorage.getItem('amount'));
        this.total = localStorage.getItem('total');
        console.log(this.products);

    }
    pay() {

        localStorage.clear();
        this.router.navigate(['']);

    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    changeAmount(index: number, event: any) {
        const amountAux = localStorage.getItem('amount');
        let aux: number = Number(amountAux) - Number(this.products[index].amount);
        console.log(aux);

        this.products[index].amount = event.target.value;
        this.products[index].price = this.products[index].price * event.target.value;


        aux = Number(aux) + Number(event.target.value);
        this.amount = aux.toString();
        localStorage.setItem('amount', this.amount);
        localStorage.setItem('products', JSON.stringify(this.products));
        const auxProducts = localStorage.getItem('products');

        this.products = JSON.parse(auxProducts);

        let totalAux = 0;
        for (let i = 0; i < this.products.length; i++) {
            totalAux += this.products[i].price;
        }

        this.total = totalAux.toString();
        localStorage.setItem('total', this.total);

    }
    deleteProduct(index: number, id: any) {
        let amountAux = Number(localStorage.getItem('amount'));
        amountAux -= this.products[index].amount;
        this.amount = amountAux.toString();
        this.products.splice(index, 1);

        let totalAux = 0;

        for (let i = 0; i < this.products.length; i++) {
            totalAux += this.products[i].price;
        }
        this.total = totalAux.toString();
  

        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('amount', this.amount);
        localStorage.setItem('total', this.total);

    }


}