import { Component, OnInit} from '@angular/core';
import { CustomerServices } from '../shared/customer-services/customer.services';
import { Customer } from "../shared/customer-models/customer.model";
import { FormGroup,Validators }  from '@angular/forms';
import { TextboxComponent, TextareaComponent }  from '../../shared/components/common-control/control-definition/textbox.field';


@Component({
    selector: 'app-new-customer-component',
    templateUrl: './customer-new-component.html',
    styleUrls: ['./customer-new-component.scss'],
    providers: [CustomerServices]
   
})

export class NewCustomerComponent implements OnInit {
    //@Input() questions: ControlBase<any>[] = [];
  formPayInformation: FormGroup;
  formCustomerInformation:FormGroup;
  payLoad = '';
  constructor(private CustomerServices: CustomerServices) {  }  

  getCustomerInformation() {

    let controls: any[] = [      

      new TextboxComponent({
        key: 'CompanyName',
        label: 'Company name',
        value: null,
        validations: [Validators.required],
        order: 1
      }),

      new TextboxComponent({
        key: 'CompanyPresident',
        label: 'Company President',
        value: null,
        order: 2
      }),
      new TextboxComponent({
        key: 'BankAddress',
        label: 'Bank Address',
        value: null,
        order: 2
      }),

      new TextboxComponent({
        key: 'IsHeadQuarter',
        label: 'HeadQuarter',
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'CompanyWebsite',
        label: 'CompanyWebsite',
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'Email',
        label: 'Email',
        value: null,
        order: 3
      }),

      new TextareaComponent({
        key: 'Description',
        label: 'Description',
        value: null,
        order: 3
      }),
      
      new TextboxComponent({
        key: 'addressContact',
        label: 'Address & Contact',
        value: null,
        order: 3,
        parent:true,
        children:[          
          new TextboxComponent({
            key: 'Address1',
            label: 'Address 1',
            value: null,
            order: 3,
            className:'col-4',
          }),        

          new TextboxComponent({
            key: 'Address2',
            label: 'Address 2',
            value: null,
            order: 3,
            className:'col-4',
          }),   

          new TextboxComponent({
            key: 'Country',
            label: 'Country',
            value: null,
            order: 3,
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'StateOrProvince',
            label: 'State/Province',
            value: null,
            order: 3,
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'ZipCode',
            label: 'Zip/ Postal Code',
            value: null,
            order: 3,
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'PhoneNumber',
            label: 'Phone Number',
            value: null,
            order: 3,
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'FaxNumber',
            label: 'Fax Number',
            value: null,
            order: 3,
            className:'col-4',
          }),

        ]
      }),

    ];

    return controls.sort((a, b) => a.order - b.order);
  }


  
  getPayInformation() {

    let controls: any[] = [      

      new TextboxComponent({
        key: 'PaymentMethod',
        label: 'Preferred payment me',
        value: null,
        validations: [Validators.required],
        order: 1
      }),

      new TextboxComponent({
        key: 'BankName',
        label: 'Bank Name',
        value: null,
        validations: [Validators.required],
        order: 2
      }),
      new TextboxComponent({
        key: 'BankAddress',
        label: 'Bank Address',
        value: null,
        validations: [Validators.required],
        order: 2
      }),

      new TextboxComponent({
        key: 'AccountName',
        label: 'Account Name',
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'AccountAddress',
        label: 'Account Address',
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'IbanNumber',
        label: 'IBAN number',
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'AccountCurrencyId',
        label: 'Account Currency',
        value: null,
        order: 3
      }),
      new TextboxComponent({
        key: 'SwiftCode',
        label: 'BIC/SWIFT code',
        value: null,
        order: 3
      }),
      new TextboxComponent({
        key: 'PaymentConditions',
        label: 'Payment Conditions',
        value: null,
        order: 3
      }),

    ];

    return controls.sort((a, b) => a.order - b.order);
  }

  controlsPayInformation = this.getPayInformation();
  controlsCustomerInformation = this.getCustomerInformation();


  onSubmitCustomer(){}
  onSubmit() {
    // this.CustomerServices.
    // this.formPayInformation['submit']=true;
    //tabGroup.selectedIndex=1;
    
    let newCustomer=new Customer();
    // let formPaymentValue =this.formPayInformation.value;
    // let formCustomerValue =this.formCustomer.value;
    
    // newCustomer.Address1 =  formPaymentValue.preferredPaymentMe;

    
    // newCustomer.CompanyName =  formCustomerValue.CompanyName;
    // newCustomer.CompanyPresident =  formCustomerValue.CompanyPresident;
    // newCustomer.Email =  formCustomerValue.Email;
    // newCustomer.PostCode =  formCustomerValue.PostCode;
    // // newCustomer.Id =  formCustomerValue.Id;
    // newCustomer.IsHeadQuarter =  formCustomerValue.IsHeadQuarter;
    // newCustomer.Description =  formCustomerValue.Description;
    // newCustomer.Address1 =  formCustomerValue.addressContact.Address1;
    // newCustomer.Address2 =  formCustomerValue.addressContact.Address2;
    // newCustomer.City =  formCustomerValue.addressContact.City;
    // newCustomer.StateOrProvince =  formCustomerValue.addressContact.StateOrProvince;
    // newCustomer.ZipCode =  formCustomerValue.addressContact.ZipCode;
    // newCustomer.Country =  formCustomerValue.addressContact.Country;
    // newCustomer.PhoneNumber =  formCustomerValue.addressContact.PhoneNumber;
    // newCustomer.FaxNumber =  formCustomerValue.addressContact.FaxNumber;
    // newCustomer.CompanyWebsite =  formCustomerValue.CompanyWebsite;

    // newCustomer.PaymentMethod = formPaymentValue.PaymentMethod;
    // newCustomer.BankAccount.BankName = formPaymentValue.BankName;
    // newCustomer.BankAccount.BankAddress = formPaymentValue.BankAddress;
    // newCustomer.BankAccount.AccountName = formPaymentValue.AccountName;
    // newCustomer.BankAccount.AccountAddress = formPaymentValue.AccountAddress;
    // newCustomer.BankAccount.AccountNumber = formPaymentValue.AccountNumber;
    // newCustomer.BankAccount.IbanNumber = formPaymentValue.IbanNumber;
    // newCustomer.BankAccount.AccountCurrencyId = formPaymentValue.AccountCurrencyId;
    // newCustomer.BankAccount.SwiftCode = formPaymentValue.SwiftCode;
    // newCustomer.BankAccount.PaymentConditions = formPaymentValue.PaymentConditions;
      

    newCustomer = {
      "Id": 0,
      "CompanyName": "string",
      "Email":"Email",
      "PostCode":"PostCode",
      "CompanyPresident": "string",
      "IsHeadQuarter": true,
      "Address1": "string",
      "Address2": "string",
      "City": "string",
      "StateOrProvince": "string",
      "ZipCode": "string",
      "Country": "string",
      "PhoneNumber": "string",
      "FaxNumber": "string",
      "CompanyWebsite": "string",
      "PaymentMethod": "string",
      "Description": "string",
      "BankAccount": {
        "BankName": "string",
        "BankAddress": undefined,
        "AccountName": "string",
        "AccountAddress": "string",
        "AccountNumber": undefined,
        "IbanNumber": "string",
        "AccountCurrencyId": 0,
        "SwiftCode": "string",
        "PaymentConditions": "string"
      }
    }

    this.CustomerServices.addNewCustomer(newCustomer).then(
      result=>{console.log(result)}
    );


  }
  
  ngOnInit() {
    this.formCustomerInformation = this.CustomerServices.toFormGroup(this.controlsCustomerInformation);
    this.formPayInformation = this.CustomerServices.toFormGroup(this.controlsPayInformation);
  }
}
