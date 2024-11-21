import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productList: product[] = [
    {
      productId: 1,
      productName: "Tuf Gaming",
      productDescription: "A high-performance gaming laptop from ASUS.",
      productPrice: 5000,
      productImg: "https://dlcdnwebimgs.asus.com/gain/a25d4381-0f1a-48bd-86d6-3bd59f017f19/",  
      productCategory: "Gaming",
    },
    {
      productId: 2,
      productName: "iPhone 14",
      productDescription: "Apple's latest smartphone with advanced features.",
      productPrice: 1000,
      productImg: "https://inventstore.in/wp-content/uploads/2023/04/Blue-scaled.webp",  
      productCategory: "Mobile",
    },
    {
      productId: 3,
      productName: "Sony WH-1000XM5",
      productDescription: "Wireless noise-canceling headphones.",
      productPrice: 300,
      productImg: "https://m.media-amazon.com/images/I/51KGPDttQhL._AC_UF1000,1000_QL80_.jpg",  
      productCategory: "Accessories",
    },
    {
      productId: 4,
      productName: "Samsung Galaxy S23",
      productDescription: "Samsung's flagship smartphone with top-notch performance.",
      productPrice: 900,
      productImg: "https://m.media-amazon.com/images/I/71OXmy3NMCL._AC_UF1000,1000_QL80_.jpg",  
      productCategory: "Mobile",
    },
    {
      productId: 5,
      productName: "Dell XPS 13",
      productDescription: "Ultra-thin, high-performance laptop for professionals.",
      productPrice: 1200,
      productImg: "https://www.dellstore.com/pub/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/x/s/xs9320nt-xnb-shot-5-1-sl.jpg",  
      productCategory: "Laptop",
    },
  ];
getAllProducts(){
  return of(this.productList);

}
addproducts(newpro:product){
  this.productList.push(newpro);
  return "Products added successfully!"
}
deleteproduct(pid:any){
  let index=this.productList.findIndex((e)=>{
    return e.productId==pid
  })
  if(index!=-1){
    this.productList.splice(index,1);
  }

}
filteredItems(){
  return of (this.productList.filter(item => item.productCategory=='mobile'));
}
updatedAllitems(pid:any,newpro:any){
  let index=this.productList.findIndex((e)=>{e.productId==pid});
  if(index!=-1){
    this.productList.splice(index,1,newpro);
  }
}
}
