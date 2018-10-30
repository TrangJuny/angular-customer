import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-textarea',
    template: `
    <div [formGroup]="form" class="form-group" [ngSwitch]="control.controlType"  
        [ngClass]="form.value[control.key]==''?'empty':'has-value'">

        <textarea [formControlName]="control.key" class="form-control"
                [id]="control.key" rows="3"></textarea>

        <label [attr.for]="control.key" class="control-label">
            {{control.label}}
            <span class="text-red" *ngIf="control.required">*</span>
        </label>

        <app-error-validate [control]="controlForm" 
        *ngIf="controlForm.touched || controlForm.dirty || form.submit"></app-error-validate>
        
    </div>
    `
})
export class TextareaComponent {
    @Input() control: any = {};
    @Input() form: FormGroup;
    
    get controlForm() { 
        return this.form.controls[this.control.key]; 
    }
}