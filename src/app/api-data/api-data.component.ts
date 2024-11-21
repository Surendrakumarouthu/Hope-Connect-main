import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css'
})
export class ApiDataComponent {
  product:any;
  joke:any;
  constructor(private service:ApiService){}
  ngOnInit(){
    this.service.getAllItem().subscribe((res)=>{
      this.product=res;
    })
  }
  getNewJoke(){
    this.service.getJoke().subscribe((res)=>this.joke=res)
  }

}
