import { ICustomerServices } from './interfaces/Icustomers.service';
import { Customer } from '../customer-models/customer.model';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'; 
import { Headers, Http, RequestOptions } from '@angular/http';
import { Configuration } from '../../../app.constants';

import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ControlBase } from '../../../shared/components/common-control/control-definition/base.field';
//'../../../shared/components/control-definition/base.field;

@Injectable()
export class CustomerServices implements ICustomerServices {

  public customerApiUrl: string = Configuration.API_CUSTOMER_ENDPOINT;
  private options: RequestOptions;
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  constructor(private http: Http) {
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/xml',
        'crossDomain': true
      }
    );
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Header', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    this.options = new RequestOptions({ headers: headers });
  }
  public getAllCustomer(): Promise<Customer[]> {
    const url = `${this.customerApiUrl}/GET`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }
  public getCustomer(id: number): Promise<Customer> {
    const url = `${this.customerApiUrl}/GET/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }


  /**
   * addNewCustomer
   */
  public addNewCustomer(customer: Customer): Promise < String > {
  console.log(this.options);
  const url = `${this.customerApiUrl}/Add`;
  return this.http.post(url, customer, this.options)
    .toPromise()
    .then(response => response.json() as string)
    .catch(this.handleError);
}
  public toFormGroup(controls: ControlBase < any > []) {
    let group: any = {};

    controls.forEach(control => {
      if (!control.parent) {
        let validatetions= control.validations.concat([Validators.maxLength(100)])
        group[control.key] = new FormControl(control.value || '', validatetions);
      }
      else {
        group[control.key] = this.toFormGroup(control.children);
      }
    });

    return new FormGroup(group);
  }

}

