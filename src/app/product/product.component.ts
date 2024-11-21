import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:any;
  constructor(private service:DataService){}
ngOnInit(){
  this.service.getAllProducts().subscribe((res) => {
    this.products = res;
    console.log(this.products)
  })
}
}
