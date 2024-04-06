import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  today = Date();
  Data: any;
  constructor(private http: HttpClient) {
    setInterval(() => {
      this.today = Date();
    }, 1000);
  }
  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.http.get('http://stg-api.goldbharat.com:4200/api/aboutus').subscribe((res: any) => {
        this.Data = res;
    });
  }
}

// console.log('response data',res)
