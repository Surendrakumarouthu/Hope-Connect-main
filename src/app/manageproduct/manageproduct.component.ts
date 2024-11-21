import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrl: './manageproduct.component.css'
})
export class ManageproductComponent {
  products: any;
  updatedpro:any;

  constructor(private service:DataService){

  }
  ngOnInit(){
    this.service.getAllProducts().subscribe((data) => {
        this.products=data;
    })
  }
  deletenow(pid:any){
    this.service.deleteproduct(pid)
  }
  selectedItems(products:any){
    this.updatedpro=products;
  }
  updatenow(){
    this.service.updatedAllitems(this.updatedpro.productId,this.updatedpro)
  }

}
