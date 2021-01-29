import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  
  inputValue: number;
  imgUrl: string;
  price: number;
  name: string;
  
  constructor() { }
  
  ngOnInit(): void {
    const randomNum: number = Math.floor(Math.random() * 100)

    this.price = randomNum;
    this.name = 'Tabliczka czekolady';
    this.imgUrl = `https://picsum.photos/id/${randomNum}/800/600`;
    this.inputValue = 0;
  }

  onIncrease(): void {
    console.log('object')
    this.inputValue = ++this.inputValue;
    console.log(this.inputValue)
  }

  onDecrease(): void {
    if (this.inputValue <= 0) {
      this.inputValue = 0;
    } else {
      this.inputValue = --this.inputValue;
    }
  }
    
    onKeyUp(value) {
      console.log(value)
    }

}
