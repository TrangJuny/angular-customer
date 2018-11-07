import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkbox',
    template: `
            <div [formGroup]="form" class="form-group form-check">
                <mat-checkbox class="example-margin" [(ngModel)]="controlForm.value">Checked</mat-checkbox>
            </div>
           
    `
})
export class CheckboxComponent {
    @Input() control:any = {};
    @Input() form:FormGroup;
    
    get controlForm() { 
        console.log('checkbox');
        console.log(this.form.controls[this.control.key]);
        return this.form.controls[this.control.key]; 
    }
}