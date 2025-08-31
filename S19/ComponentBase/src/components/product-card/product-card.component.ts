import { Component, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ShadowDirective } from '../../directives/shadow.directive';

@Component({
  selector: 'app-product-card',
  imports: [ShadowDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit, OnChanges {
  productList: IProduct[];
  filteredproductList!: IProduct[];
  requiredQuantity: Number;
  totalPrice: number;

  @Input() selectedCategoryId: number = 0;
  @Output() totalePriceChange: EventEmitter<number>;
  constructor() {
    this.requiredQuantity = 0;
    this.productList = [
      {
        id: 1,
        name: 'Lenove',
        price: 10220,
        quantity: 5,
        imageUrl: "https://picsum.photos/300/200",
        categoryId: 1
      },
      {
        id: 2,
        name: 'Dell',
        price: 3234,
        quantity: 4,
        imageUrl: "https://picsum.photos/300/200",
        categoryId: 1
      },
      {
        id: 3,
        name: 'Hp',
        price: 1200,
        quantity: 12,
        imageUrl: "https://picsum.photos/300/200",
        categoryId: 1
      },
      {
        id: 4,
        name: 'Honour',
        price: 100,
        quantity: 1,
        imageUrl: "https://picsum.photos/300/200",
        categoryId: 2
      },
      {
        id: 4,
        name: 'Honour',
        price: 100,
        quantity: 1,
        imageUrl: "https://picsum.photos/300/200",
        categoryId: 2
      },
      {
        id: 5,
        name: 'Samsung',
        price: 1555,
        quantity: 22,
        imageUrl: "https://picsum.photos/300/200",
        categoryId: 2
      },
      {
        id: 6,
        name: 'Relme',
        price: 12220,
        quantity: 3,
        imageUrl: "https://picsum.photos/300/200",
        categoryId: 2
      },
    ];

    this.totalePriceChange = new EventEmitter<number>();
    this.totalPrice = 0;
  }

  buy(product:IProduct, count: any): void {

    if(count > product.quantity){
      alert("can not add this quantity");
    }else {

      product.quantity -=count;
      let itemsCount: number;
      this.totalPrice = product.price * +count;
      this.totalePriceChange.emit(this.totalPrice);
    }

  }


  ngOnChanges(changes: SimpleChanges): void {

    if (this.selectedCategoryId == 0) {
      console.log("zero")
      this.filteredproductList = this.productList;
      return;
    }

    this.filteredproductList = this.productList
      .filter((p) => p.categoryId == this.selectedCategoryId);
  }

  ngOnInit(): void {
    this.filteredproductList = this.productList;
  }
}
