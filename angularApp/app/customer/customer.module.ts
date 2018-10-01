import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerRoutes } from './customer.routes';
import { CustomerComponent } from './customer-component/customer.component';
import { CustomerDetailComponent } from './customer-detail-component/customer-detail.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

import { DndModule } from 'ngx-drag-drop';
import { ngfModule } from "angular-file"

import { CustomerColumnOptionsComponent } from './column-options-component/column-options.component';
import { ColumnOptionsRowComponent } from './column-options-component/row/column-options-row.component';
import { NewCustomerComponent } from './customer-new-component/customer-new-component';
import { AppControlComponent } from '../shared/components/common-control/control-view/control.component';
import { ErrorvalidateComponent } from '../shared/components/common-control/error-validate/error-validate-component';
import { RadioComponent } from '../shared/components/common-control/control-view/radio';
import { InputComponent } from '../shared/components/common-control/control-view/input';
import {DropDownComponent} from '../shared/components/common-control/control-view/dropdown';
import { CheckboxComponent } from '../shared/components/common-control/control-view/checkbox';


@NgModule({
    imports: [
        CommonModule,
        CustomerRoutes,
        HttpModule,
        FormsModule,
        GridModule,
        NgbModule,
        ReactiveFormsModule,
        DndModule,
        MatTabsModule,   
        ngfModule
    ],
    declarations: [
        CustomerComponent,
        CustomerDetailComponent,
        CustomerColumnOptionsComponent,
        ColumnOptionsRowComponent,
        NewCustomerComponent,
        AppControlComponent,
        ErrorvalidateComponent,
        DropDownComponent,
        InputComponent,
        CheckboxComponent,
        RadioComponent
    ],
})

export class CustomerModule { }


