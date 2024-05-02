import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
createProduct() {
  this.http.post('https://fakestoreapi.com/products', this.postData, this.httpOptions)
    .subscribe((result: any) => {
      console.log('New product created:', result);
      // Optionally, you can reset the postData object after successful creation
      this.postData = {
        name: '',
        price: 0,
        category: '',
        description: ''
      };
    }, error => {
      console.error('Error creating product:', error);
    });
}
  usersdata: any;
  dummay:any;
  randomdata:any;
  newdata: any;
  list2: any;
  product: any;
  product2: any;
  products: any;
  card:any;
  carts: any;
  newpro: any;
  postData:any={
    name: '',
    price: '',
    category: '',
    description: ''
  }
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.jewerallydata();
    this.dummydata();
    this.getrandomdata();
    this.buyOrder();
    this.buyproduct();
    this.buycard();
    this.newprodut();
    this.postprodut();

    
  }

  jewerallydata() {
    this.http
      .get('https://fakestoreapi.com/products/category/jewelery')
      .subscribe((res: any) => {
        this.usersdata = res;
      });
  }

  dummydata(){
    this.http.get('https://dummyjson.com/products/1').subscribe((res2: any) =>{
      this.dummay = res2;
    })
  }


  getrandomdata(){
    this.http.get('https://randomuser.me/api/').subscribe((res3: any)=> {
      this.randomdata = res3.results[0]
    })
  }


  buyOrder(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsInJlZ2lzdGVyX3Bob25lX251bWJlciI6IjYzNjYxNzU0MzQiLCJuYW1lIjoiTW9uaWthIiwiaWF0IjoxNzExNzA0MDgwLCJleHAiOjE3MTk0ODAwODB9.HT_aW3_4ZXtS5CxHutQaK0r7jYghoKg2ol8prlEU0ok',
    });
    
    this.http.get('http://stg-api.goldbharat.com:4200/api/getMyOrders/BUY', { headers }).subscribe((response:any) => {
      console.log('buy',response[0],);
       this.list2=response[5]
       
    }, error => {
      console.error(error);
    });
    
  }

  buyproduct(){
    this.http.get('https://dummyjson.com/products').subscribe((res6: any) => {
      this.product = res6.products.slice(5,10)
      // this.product = res6.products[2]
    })
  }


  buycard(){
    this.http.get('https://dummyjson.com/carts').subscribe((res7: any) =>{
      this.carts = res7.carts.slice(0,5)
    })
  }

  newprodut(){
    this.http.get('https://fakestoreapi.com/products/1').subscribe((result: any) =>{
      this.newpro = result;
    })
  }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  postprodut(){
    this.http.post('https://fakestoreapi.com/products/',this.postData,this.httpOptions).subscribe((result: any) =>{
      this.newpro = result;
    })
  }

  

}
