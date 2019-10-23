import {
  Component, Input, TemplateRef, ViewChild, Output, EventEmitter,
  OnInit, Renderer2, ViewChildren, ElementRef, AfterViewInit
} from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { } from '@angular/core/src/security';
import { FieldBase } from '../fields/field-base';
import { FieldControlType } from '../enums/field-control-type.enum';
import { HintEvent } from '../hint-event';


@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit, AfterViewInit {
  @Input() field: FieldBase;
  @Input() form: FormGroup;
  @Output() hint: EventEmitter<HintEvent> = new EventEmitter<HintEvent>();
  @ViewChild('text') text: TemplateRef<any>;
  @ViewChild('textUnique') textUnique: TemplateRef<any>;
  @ViewChild('checkbox') checkbox: TemplateRef<any>;
  @ViewChild('dropdown') dropdown: TemplateRef<any>;
  @ViewChild('note') note: TemplateRef<any>;
  @ViewChild('number') number: TemplateRef<any>;
  @ViewChild('radiobutton') radiobutton: TemplateRef<any>;
  @ViewChild('fieldElement') element: ElementRef;
  showHintLink = false;
  msgSpan: HTMLElement;
  sanitizedString: SafeHtml;
  formControl: AbstractControl;
  domElm: HTMLElement;

  constructor(private ren: Renderer2, private san: DomSanitizer) { }

  get showError() {
    return this.formControl
      && this.formControl.touched
      && !this.formControl.valid;
  }
  ngOnInit() {
    this.showHintLink = this.hint.observers.length > 0;
    this.formControl = this.form.controls[this.field.internalName.value];
  }

  ngAfterViewInit() {
    if (this.element && this.element.nativeElement) {
      this.domElm = this.element.nativeElement;
    }
    this.registerListeners();
  }

  getTemplate(): TemplateRef<any> {
    let templateName: string = FieldControlType[this.field.displayAs];
    if (templateName) {
      templateName = templateName.toLowerCase();
      if (this.field.checkUniqueFunc) {
        if (this[templateName + 'Unique']) {
          return this[templateName + 'Unique'];
        }
      }
      if (this[templateName]) {
        return this[templateName];
      }
    }
    return null;
  }

  showHintDetails(evt: Event) {
    if (this.hint.observers.length > 0) {
      const hintEvt = evt as HintEvent;
      hintEvt.field = this.field;
      this.hint.emit(hintEvt);
    }
  }

  showErrMsg(evt: MouseEvent) {
    this.showMsg(evt.target);
  }
  showHintMsg(evt: MouseEvent) {
    this.showMsg(evt.target, 'Click icon for help');
  }

  private showMsg(target: EventTarget, msg?: string) {
    this.msgSpan = this.ren.createElement('span');
    this.ren.addClass(this.msgSpan, 'msg');
    const txt = this.ren.createText(msg || this.getValidationErrMessage());
    this.ren.appendChild(this.msgSpan, txt);
    const parent = this.ren.parentNode(target);
    this.ren.appendChild(parent, this.msgSpan);
  }

  hideMsg(evt: MouseEvent) {
    const parent = this.ren.parentNode(evt.target);
    this.ren.removeChild(parent, this.msgSpan);
  }

  private getValidationErrMessage(): string {
    let rv = '';
    const errors = this.formControl.errors;
    if (errors) {
      if (errors.required) {
        rv += 'Field is required';
      }
      if (errors.notUnique) {
        rv += 'Value must be unique';
      }
    }
    return rv;
  }

  private registerListeners() {
    if (!this.domElm) {
      return;
    }
    if (this.field.focus) {
      this.ren.listen(this.domElm, 'focus', (evt) => this.processEvent(evt, 'focus'));
    }
    if (this.field.blur) {
      this.ren.listen(this.domElm, 'blur', (evt) => this.processEvent(evt, 'blur'));
    }
  }
  private processEvent(evt: FocusEvent, eventName: string) {
    switch (eventName) {
      case 'focus':
        return this.field.focus(this.field, this.formControl, evt);
      case 'blur':
        return this.field.blur(this.field, this.formControl, evt);
    }
  }
  cancelMenu() {
    return false;
  }

  keydown(evt: KeyboardEvent): boolean {
    /*  !!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!
      NOTE: This code does *some* parsing of the value to prevent XSS,
      but it is not complete.  It is for demo purposes only.  Do not use
      in production without additional measures to ensure that all dangerous
      content is stripped before the final call to bypassSecurityTrustHtml.
        !!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!*/

    let val: string = this.form.value[this.field.internalName.value];
    val += '';
    if (evt) {
      if (evt.ctrlKey && evt.key.toLowerCase() !== 'c') {
        return false;
      }
    }
    // convert all '<' to '&lt;' to prevent HTML tags
    val = val.replace(/</g, '&lt;');
    // allow only <b, <i, <u, </, <ul, <li for basic text formatting
    val = val.replace(/&lt;b /g, '<b ');
    val = val.replace(/&lt;i /g, '<i ');
    val = val.replace(/&lt;u /g, '<u ');
    val = val.replace(/&lt;\/ /g, '</ ');
    val = val.replace(/&lt;ul /g, '<ul ');
    val = val.replace(/&lt;li /g, '<li ');
    this.sanitizedString = this.san.bypassSecurityTrustHtml(val);
    return true;
  }
}
