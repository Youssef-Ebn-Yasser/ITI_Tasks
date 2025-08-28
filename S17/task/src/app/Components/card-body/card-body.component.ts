import { NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-body',
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.css'
})
export class CardBodyComponent {

  title!:String;
  names:String[]=["ali","yousef","said","hoda"]
  isAppear:boolean = true;
  showBounas:boolean =false;

  constructor(){
    this.title ="this is the Title";
  }


  toggle(){
    this.isAppear=!this.isAppear;
  }

  get buttonWord(){
    return this.isAppear ? 'hide' : 'show';
  }

  toggleBouns(){
    this.showBounas=!this.showBounas;
  }

    get returnButtonWord(){
    return this.showBounas ? 'return to main' : 'return to bounas';
  }
}
