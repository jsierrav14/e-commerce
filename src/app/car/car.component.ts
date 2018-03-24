import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'car.component.html'
})

export class CarComponent implements OnInit {


    closeResult: string;

    products: any[] = [];
    amount: string;
    total: string;

    constructor(private modalService: NgbModal) {

    }
    ngOnInit() {
        const auxProducts = localStorage.getItem('products');

        this.products = JSON.parse(auxProducts);
        this.amount = (localStorage.getItem('amount'));
        this.total = localStorage.getItem('total');
        console.log(this.products);

    }
    pay() {
     localStorage.clear();
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


}