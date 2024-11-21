import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  resmsg:any;
  addproductsform:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private service:DataService,private router:Router){
  this.addproductsform=this.fb.group({
    productId:['',Validators.required],
    productName:['',Validators.required],
    productDescription:['',Validators.required],
    productPrice:['',Validators.required],
    productImg:['',Validators.required],
    productCategory:['',Validators.required]
  })

  }
  addproduct(){
    console.log(this.addproductsform)
    this.resmsg=  this.service.addproducts(this.addproductsform.value)
    alert(this.resmsg);
    // Swal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success"
    // });
    this.router.navigateByUrl('/user/product')
  }

}
