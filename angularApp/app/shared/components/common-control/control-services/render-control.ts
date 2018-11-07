// import pnp from "sp-pnp-js";
import { ControlOptions } from "./interfaces/control.services";
import { Injectable } from "@angular/core";
import { ControlBase } from '../control-definition/base.field';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()

export class RenderControl implements ControlOptions {

  public toFormGroup(columns: ControlBase<any>[]) {
    let group: any = {};
    columns.forEach(control => {
       group[control.key] = new FormControl(control.value || '', control.validations);
    });
    return new FormGroup(group);
  }
  
}
