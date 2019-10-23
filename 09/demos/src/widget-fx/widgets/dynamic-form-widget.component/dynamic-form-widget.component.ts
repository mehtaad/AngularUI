import { Component, OnInit } from '@angular/core';
import { IWidget } from '../../IWidget';
import { Observable } from 'rxjs/Observable';
import { FieldBase } from '../../../dynamic-forms/fields/field-base';
import { FieldText } from '../../../dynamic-forms/fields/field-text';
import { FieldNote } from '../../../dynamic-forms/fields/field-note';
import { FieldBoolean } from '../../../dynamic-forms/fields/field-boolean';
import { FieldMultiChoice } from '../../../dynamic-forms/fields/field-multi-choice';
import { FieldNumber } from '../../../dynamic-forms/fields/field-number';
import { FieldDD } from '../../../dynamic-forms/fields/field-dd';
import { ChoiceFieldBase } from '../../../dynamic-forms/fields/choice-field-base';
import { AbstractControl } from '@angular/forms';
import { HintEvent } from '../../../dynamic-forms/hint-event';

@Component({
  selector: 'dynamic-form-widget',
  templateUrl: './dynamic-form-widget.component.html',
  styleUrls: ['./dynamic-form-widget.component.scss']
})
export class DynamicFormWidgetComponent implements IWidget, OnInit {
  widgetTitle = 'Dynamic Form';
  fields: FieldBase[] = [];
  existingVals: Observable<{}[]> = null;

  frmSubmit(vals: {}) {
    console.log('submitted values: ', vals);
  }

  ngOnInit(): void {
    this.getFormSchema();

    // simulate getting data from two different sources that respond in different
    // lengths of time.  Only "complete" the observable when all data received.
    // ToDo: Handle a timeout if one response times out - show message to user.
    this.existingVals = Observable.create(observer => {
      const allVals: {} = {};
      setTimeout(() => {
        const d = this.getExistingData();
        Object.assign(allVals, d);
        observer.next(allVals);
        if (Object.keys(allVals).length === this.fields.length) {
          observer.complete();
        }
      }, 500);
      setTimeout(() => {
        const d = this.getExistingData2();
        Object.assign(allVals, d);
        observer.next(allVals);
        if (Object.keys(allVals).length === this.fields.length) {
          observer.complete();
        }
      }, 1500);
    });
  }

  showHint(evt: HintEvent) {
    alert('Show Hint info for ' + evt.field.displayName);
  }
  fieldFocus(fld: FieldBase, ctrl: AbstractControl, event: FocusEvent): boolean {
    console.log('Focus event for ' + fld.displayName);
    return true;
  }
  fieldBlur(fld: FieldBase, ctrl: AbstractControl, event: FocusEvent): boolean {
    console.log('Blur event for ' + fld.displayName);
    return true;
  }

  private getExistingData() {
    return {
      'fld1': null,
      'fld2': 'This text is going to be <b>sanitized</b>, so <a href="javascript:alert(\'hello\')">javascript</a> can\'t be injected, <ul><li>but some HTML</li><li>still works</li></ul>',
      'fld3': null,
      'fld4': true
    };
  }
  private getExistingData2() {
    return {
      'fld5': 333,
      'fld6': '3'
    };
  }
  checkUnique(term: string): boolean {
      switch (term) {
        case '12345':
          return false;
        default:
          return true;
      }
  }

  private getFormSchema() {
    let fld: FieldBase;
    fld = new FieldText('fld 1', 'Field One');
    fld.placeholder = 'This is a placeholder';
    fld.defaultValue = 'This is the default';
    fld.required = true;
    fld.hint = this.showHint;
    fld.checkUniqueFunc = this.checkUnique;
    this.fields.push(fld);

    fld = new FieldNote('fld2', 'Field Two');
    fld.placeholder = 'This is also a placeholder';
    fld.focus = this.fieldFocus;
    fld.blur = this.fieldBlur;
    this.fields.push(fld);

    fld = new FieldBoolean('fld3', 'Field Three');
    this.fields.push(fld);

    fld = new FieldMultiChoice('fld4', 'Field Four');
    this.fields.push(fld);

    fld = new FieldNumber('fld5', 'Field Five');
    fld.focus = this.fieldFocus;
    fld.blur = this.fieldBlur;
    this.fields.push(fld);

    fld = new FieldDD('fld6', 'Field Six');
     (fld as ChoiceFieldBase).choices = [
      { text: 'one', value: '1' },
      { text: 'two', value: '2' },
      { text: 'three', value: '3' }
    ];
    this.fields.push(fld);
  }
}
