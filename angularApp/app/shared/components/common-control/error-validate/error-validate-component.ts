import { Component, OnInit ,Input} from '@angular/core';

@Component({
    selector: 'app-error-validate',
    templateUrl: './error-validate-component.html',
    styleUrls: ['./error-validate-component.scss'],
   
})

export class ErrorvalidateComponent implements OnInit {
    @Input() control: any;
 
    constructor() {  }
    ngOnInit() {

    }

    get message(){
        console.log(this.control);
        for(let err in this.control.errors){
            return this.getError(err, this.control.errors[err]);
        };
        return null;
    }
    getError(err,value){
        let mes={
            "required":"Required",
            "minlength":`Minleingth : ${value.requiredLength} character`,
            "maxlength": `Maxleingth : ${value.requiredLength} character`,
            "pattern": `Not valid ${value.requiredLength}!`,
            "email": `Email must be a valid email address`,
        }
        return mes[err];
    }

}
