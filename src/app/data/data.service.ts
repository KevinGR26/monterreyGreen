import { Injectable } from '@angular/core';
import { CustomerIF } from './customer-IF';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private myAppUrl: string;
  private myApiUrl: string;

  
  constructor( private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = ''
   }

  getListProducts(): Observable<CustomerIF[]>{
    return this.http.get<CustomerIF[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  
  getSubscriptionTypes(): Observable<string[]> {
    return of (['Monterrey', 'Juarez', 'Guadalupe', 'Escobedo', 'San Nicolas', 'Santa Catarina', 'Apodaca']);
  }
  postCustomerIf(customerIF: CustomerIF) : Observable<void>{
    // return of(customerIF);

    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, customerIF);


  }
}
