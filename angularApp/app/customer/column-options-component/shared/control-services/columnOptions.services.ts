// import pnp from "sp-pnp-js";
import { IColumnOptions } from "./interfaces/IColumnOptions.services";
import { Injectable } from "@angular/core";
import { ControlBase } from '../control-definition/base.field';
import { FormControl, FormGroup,Validators} from '@angular/forms';
@Injectable()
export class ColumnOptionsServices implements IColumnOptions {
  public toFormGroup(columns: ControlBase<any>[]) {
    let group: any = {};
   
    columns.forEach(control => {
      Validators.required
      return group[control.key] = new FormControl(control.value || '', control.validations);     
    });
    return new FormGroup(group);
  }
  
}

 