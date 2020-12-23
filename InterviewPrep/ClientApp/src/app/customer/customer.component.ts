import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';

@Component({
  selector: 'app-counter-component',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  public currentCount = 0;
  private _http: HttpClient;
  private _url: string;

  public incrementCounter() {
    this.currentCount++;
    this.GetNextCustomer();
  }

  
  products: Product[];

  public customers: Customer[];

  constructor(http: HttpClient,private productService: ProductService, @Inject('BASE_URL') baseUrl: string) {

    baseUrl = 'http://localhost:7001/api/';

    this._http = http;
    this._url = baseUrl;

    console.log(baseUrl);

    this.GetNextCustomer();    
    //this.productService.getProductsSmall().then(data => this.products = data);
  }

  
  ngOnInit() {
    
}

  private GetNextCustomer()
  {
     this._http.get<Customer[]>(this._url + 'customer').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));

    //this.getProducts().then(data => this.customers = data);  

  }

  getProducts() {
    return this._http.get<any>(this._url + 'customer')
    .toPromise()
    .then(res => <Customer[]>res.data)
    .then(data => { return data; });
}

  

}



export interface Customer {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
  phone: string;
  cell: string;
  picture: Picture;
  nat: string;
}
export interface Name {
  title: string;
  first: string;
  last: string;
}
export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
}
export interface Street {
  number: number;
  name: string;
}
export interface Coordinates {
  latitude: string;
  longitude: string;
}
export interface Dob {
  date: string;
  age: number;
}
export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

