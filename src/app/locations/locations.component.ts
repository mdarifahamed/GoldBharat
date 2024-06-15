import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
datausers: any;
formData: any;
user: any = {};
usersdata : any;
product: any;

  

constructor(private http:HttpClient){

}

  ngOnInit(): void {
    this.users();
    // this.getUsers();
    this.getdata();
    this.products();
   
    
  }

  users(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res : any)=>{
      this.datausers = res;
    })
  }

  
  submitForm(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(apiUrl, this.user, { headers })
      .subscribe(
        (response) => {
          console.log('API Response:', response);
          // Optionally, you can reset the form after successful submission
          this.user = {};
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
  }

  getdata(){
    this.http.get('https://randomuser.me/api/').subscribe((res1: any) =>{
      this.usersdata = res1.results[0];
    })
  }

  products(){
    this.http.get('https://api.escuelajs.co/api/v1/products').subscribe((pro:any) =>{
      this.product = pro;
    })
  }

}
