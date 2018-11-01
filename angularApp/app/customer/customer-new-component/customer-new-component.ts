import { Component, OnInit} from '@angular/core';
import { CustomerServices } from '../shared/customer-services/customer.services';
import { Customer } from "../shared/customer-models/customer.model";
import { FormGroup,Validators }  from '@angular/forms';
import { TextboxComponent, TextareaComponent }  from '../../shared/components/common-control/control-definition/textbox.field';
import { FileRestrictions, SelectEvent, ClearEvent, RemoveEvent, FileInfo } from '@progress/kendo-angular-upload';



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
        required:true,
        validations: [Validators.required,Validators.maxLength(100)],
        order: 1
      }),

      new TextboxComponent({
        key: 'CompanyPresident',
        label: 'Company President',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 2
      }),
      new TextboxComponent({
        key: 'BankAddress',
        label: 'Bank Address',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 2
      }),

      new TextboxComponent({
        key: 'IsHeadQuarter',
        label: 'HeadQuarter',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'CompanyWebsite',
        label: 'CompanyWebsite',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'Email',
        label: 'Emails',
        value: null,
        validations: [Validators.email,Validators.maxLength(100)],
        order: 3
      }),

      new TextareaComponent({
        key: 'Description',
        label: 'Description',
        validations: [Validators.maxLength(100)],
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
            validations: [Validators.maxLength(100)],
            order: 3,
            className:'col-4',
          }),        

          new TextboxComponent({
            key: 'Address2',
            label: 'Address 2',
            value: null,
            validations: [Validators.maxLength(100)],
            order: 3,
            className:'col-4',
          }),   

          new TextboxComponent({
            key: 'Country',
            label: 'Country',
            value: null,
            validations: [Validators.maxLength(100)],
            order: 3,
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'StateOrProvince',
            label: 'State/Province',
            validations: [Validators.maxLength(100)],
            value: null,
            order: 3,
            type:'number',
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'ZipCode',
            label: 'Zip/ Postal Code',
            value: null,
            validations: [Validators.maxLength(100)],
            order: 3,
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'PhoneNumber',
            label: 'Phone Number',
            validations: [Validators.maxLength(100)],
            value: null,
            order: 3,
            className:'col-4',
          }),
          new TextboxComponent({
            key: 'FaxNumber',
            validations: [Validators.maxLength(100)],
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
        required:true,
        validations: [Validators.required,Validators.maxLength(100)],
        order: 1
      }),

      new TextboxComponent({
        key: 'BankName',
        label: 'Bank Name',
        value: null,
        required:true,
        validations: [Validators.required,Validators.maxLength(100)],
        order: 2
      }),
      new TextboxComponent({
        key: 'BankAddress',
        label: 'Bank Address',
        value: null,
        required:true,
        validations: [Validators.required,Validators.maxLength(100)],
        order: 2
      }),

      new TextboxComponent({
        key: 'AccountName',
        label: 'Account Name',
        validations: [Validators.required,Validators.maxLength(100)],
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'AccountAddress',
        label: 'Account Address',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'IbanNumber',
        label: 'IBAN number',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 3
      }),

      new TextboxComponent({
        key: 'AccountCurrencyId',
        label: 'Account Currency',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 3
      }),
      new TextboxComponent({
        key: 'SwiftCode',
        label: 'BIC/SWIFT code',
        validations: [Validators.maxLength(100)],
        value: null,
        order: 3
      }),
      new TextboxComponent({
        key: 'PaymentConditions',
        label: 'Payment Conditions',
        validations: [Validators.maxLength(100)],
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
  public events: string[] = [];
  public imagePreviews: FileInfo[] = [];
  public uploadRestrictions: FileRestrictions = {
    allowedExtensions: ['.jpg', '.png']
  };

  public uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  public uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public clearEventHandler(e: ClearEvent): void {
    this.log('Clearing the file upload');
    this.imagePreviews = [];
  }

  public completeEventHandler() {
    this.log(`All files processed`);
  }

  public removeEventHandler(e: RemoveEvent): void {
    this.log(`Removing ${e.files[0].name}`);

    const index = this.imagePreviews.findIndex(item => item.uid === e.files[0].uid);

    if (index >= 0) {
      this.imagePreviews.splice(index, 1);
    }
  }

  public selectEventHandler(e: SelectEvent): void {
    const that = this;

    e.files.forEach((file) => {
      that.log(`File selected: ${file.name}`);

      if (!file.validationErrors) {
        const reader = new FileReader();

        reader.onload = function (ev) {
          let a:any=ev.target;
          const image:any = {
            src: a.result,
            uid: file.uid
          };

          that.imagePreviews.unshift(image);
        };

        reader.readAsDataURL(file.rawFile);
      }
    });
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }
  ngOnInit() {
    this.formCustomerInformation = this.CustomerServices.toFormGroup(this.controlsCustomerInformation);
    this.formPayInformation = this.CustomerServices.toFormGroup(this.controlsPayInformation);
  }
}
