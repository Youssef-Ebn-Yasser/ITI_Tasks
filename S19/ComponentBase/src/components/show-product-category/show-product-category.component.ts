import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-show-product-category',
  imports: [FormsModule, ProductCardComponent],
  templateUrl: './show-product-category.component.html',
  styleUrl: './show-product-category.component.css'
})
export class ShowProductCategoryComponent {
  selectedCategoryId: number;
  totalPrice:number;
  categoryList: ICategory[];
  constructor() {
    this.selectedCategoryId = 0;
    this.totalPrice=0
    this.categoryList = [
      { id: 1, name: "Laps" },
      { id: 2, name: "Mobile" },
    ];

  }

  onTotalPriceChanged(price:number){
    this.totalPrice += price;
  }
}
