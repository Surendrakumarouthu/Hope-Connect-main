import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filteredproducts',
  templateUrl: './filteredproducts.component.html',
  styleUrl: './filteredproducts.component.css'
})
export class FilteredproductsComponent {
  product:any;
  constructor(private service:DataService){

  }
  ngOnInit(){
    this.service.getAllProducts().subscribe(data => this.product=data)
    console.log(this.product)
  }

}
