import {
  Component, Input, OnInit, DoCheck, Output, EventEmitter, ViewChild,
  ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FieldBase } from '../fields/field-base';
import { InternalName } from '../internal-name';


@Component({
  selector: 'dynamic-form, [dynForm]',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldBase[] = [];
  @Input() valuesObs: Observable<{}[]> = null;
  @Input() submitHandler: ({}) => {};
  form: FormGroup;
  dataObs: Observable<void> = null;

  ngOnInit() {
    if (!this.fields || this.fields.length === 0) {
      return;
    }
    this.form = this.toFormGroup(this.fields);
    this.form.disable();
    this.valuesObs.toPromise<{}[]>()
      .then((values: {}[]) => {
        // only get here when the observable completes
        const formValues: {}[] = [];
        this.dataObs = Observable.create(observer => {
          this.fields.forEach((fld) => {
            let val = values[fld.internalName.value];
            if (!val) {
              val = fld.defaultValue
                ? fld.defaultValue
                : null;
            }
            formValues[fld.internalName.value] = val;
          });
          this.form.setValue(formValues);
          observer.next(true);
          observer.complete();
          this.form.enable();
        });
      });
  }

  frmSubmit() {
    if (this.submitHandler) {
      const rv: {} = {};
      Object.keys(this.form.value).forEach((fld) => {
        const field = this.fields.find((oneField) => {
          return oneField.internalName.value === fld;
        });
        if (field) {
          const originalName = field.internalName.originalName;
          rv[originalName] = this.form.value[fld];
        }
      });
      this.submitHandler(rv);
    }
  }

  fieldIdTracker(idx: number, field: FieldBase) {
    return field.internalName;
  }

  toFormGroup(fields: FieldBase[]) {
    const group: any = {};

    fields.forEach(oneField => {
      group[oneField.internalName.value] = oneField.required
        ? new FormControl('', Validators.required)
        : new FormControl('');
    });
    return new FormGroup(group);
  }

}
