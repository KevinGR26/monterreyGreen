import { Component, OnInit } from '@angular/core';
import { CustomerIF } from '../data/customer-IF';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit{

  originalCustomerIF: CustomerIF = {
    name: '',
    email: '',
    age: 0,
    message: '',
    municipio: '',
  }

  customerIF : CustomerIF = {...this.originalCustomerIF};
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]> | undefined


  constructor(private dataService: DataService){}


  ngOnInit(){
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    // this.getListProduct();
  }

  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid)
  }

  onHttpError(errorResponse: any){
    console.group('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;

   }
  
  getListProduct(){
    this.dataService.getListProducts().subscribe((data) =>{
      console.log(data)
    })
  }

  // const customer: CustomerIF = {
  //   name: this.customerIF.name,
  //   email: this.customerIF.email,
  //   age: this.customerIF.age,
  //   message: this.customerIF.message,
  //   municipio: this.customerIF.name
  // }

  onSubmit(form: NgForm){
    console.log('in onSubmit:', form.value)
    // this.dataService.postCustomerIf(this.customerIF).subscribe(
    //   result => console.log('success: ', result),
    //   error => this.onHttpError(error)
    // )

    const customer: CustomerIF = {
      name: this.customerIF.name,
      email: this.customerIF.email,
      age: this.customerIF.age,
      message: this.customerIF.message,
      municipio: this.customerIF.name
    }

    this.dataService.postCustomerIf(customer).subscribe(()=>{
      console.log('Producto Agregado')
    })
  };
}
