import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ColumnOptionsServices } from './shared/control-services/columnOptions.services';
import { DropdownColumnOption } from './shared/control-definition/dropdown.field';
import { CustomerServices } from '../shared/customer-services/customer.services';
import { ControlBase } from './shared/control-definition/base.field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";

@Component({
  selector: 'app-column-options',
  templateUrl: './column-options.component.html',
  styleUrls: ['./column-options.component.scss'],
  providers: [ColumnOptionsServices]
})

export class CustomerColumnOptionsComponent implements OnInit {
  @Input() activeColumns: any[];
  @Input() allColumns: any[];
  @Output() columnSorted: any[];
  @Output() columnOptionsChange = new EventEmitter<any>();
  @Output() closeColumnPanel = new EventEmitter<boolean>();
  columnMetadata: any[];
  columnActiveBase: any[];
  form: FormGroup;
  formdata = '';
  // private columnsControl: ControlBase<any>[] = [];
  // private groupControl: any = {};
  constructor(private services: ColumnOptionsServices,private CustomerServices: CustomerServices) {
    console.log(this.services);
  }
  public closePanel() {
    this.closeColumnPanel.emit(true);
  }
  public addNewRow() {
    let numberOfControl = this.columnMetadata.length;
    let newKey = 'column' + numberOfControl.toString();
    let newName = 'column name' + numberOfControl.toString();
    let dropdownObject = new DropdownColumnOption({
      key: newKey,
      label: newName,
      options: this.allColumns,
      validations: [Validators.required],
      order: numberOfControl,
      value: this.allColumns[0]
    })
    this.columnMetadata.push(dropdownObject);
    let controlToAdd: any;
    controlToAdd = new FormControl(dropdownObject.value || '', Validators.required);
    this.form.addControl(newKey, controlToAdd);
  }

  public deleteRow(key: string, i: number) {
    // for(var i = 0 ; i < this.columnMetadata.length ;  i ++ ){
    //   if(this.columnMetadata[i].key =  key){
    //     this.columnMetadata.splice(i);
    //   }
    // }
    if (i >= 0) {
      this.columnMetadata.splice(i, 1);
    }
    if (this.form.controls[key]) {
      delete this.form.controls[key];
    }
    if (this.form.value[key]) {
      delete this.form.value[key];
    }
  }

  public initColumns(): ControlBase<any>[] {
    let arrayControls: ControlBase<any>[] = [];
    for (let i = 0; i < this.activeColumns.length; i++) {
      let control = new DropdownColumnOption({
        key: 'column' + i.toString(),
        label: 'column name ' + i.toString(),
        options: Object.assign([], this.allColumns),
        validations: [Validators.required],
        // order: i,
        value: this.activeColumns[i]
      });
      arrayControls.push(control)
    }
    return arrayControls.sort((a, b) => a.order - b.order);
  }  

  public revert() {
    this.form.reset();
    let length = Object.keys(this.form.controls).length;
    for (let i = 0; i < length; i++) {
      this.form.removeControl('column' + i);
    }
    this.activeColumns = Object.assign([], this.columnActiveBase);
    this.columnMetadata = this.initColumns();
    this.form = this.CustomerServices.toFormGroup(this.columnMetadata);
  }
  public ngOnInit() {
    this.columnActiveBase = Object.assign([], this.activeColumns);
    this.columnMetadata = this.initColumns();
    this.form = this.CustomerServices.toFormGroup(this.columnMetadata);
  }
  public onSubmit() {
    // this.formdata = JSON.stringify(this.form.value);
    this.columnSorted = this.columnMetadata.map(x=>{
      let ob:any={};
      ob=x.value;
      return ob
    })
    //Object.assign([], this.activeColumns);
    this.columnOptionsChange.emit(this.columnSorted);
    // this.columnSorted = 
    console.log(this.form.value);
    // console.log(this.form.valid);
  }


  onDragged(item:any, list:any[], effect:DropEffect) {
    
    console.log("drag ended: ", effect ," ", JSON.stringify(event, null, 2));
    if( effect === "move" ) {

      const index = list.indexOf( item );
      list.splice( index, 1 );

    }
  }

  onDrop( event:DndDropEvent, list?:any[] ) {
    console.log("dropped", JSON.stringify(event, null, 2));
    if( list
      && (event.dropEffect === "copy"
        || event.dropEffect === "move") ) {

      let index = event.index;

      if( typeof index === "undefined" ) {

        index = list.length;
      }

      list.splice( index, 0, event.data );    
    }
  }
}
