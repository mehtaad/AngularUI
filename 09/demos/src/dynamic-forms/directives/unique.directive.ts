import {
    Directive, HostBinding, AfterViewInit, ElementRef, Renderer2,
    Input, Output, EventEmitter, forwardRef
} from '@angular/core';
import { FormGroup, FormControl, Validator, AbstractControl,  NG_VALIDATORS } from '@angular/forms';


import { FieldBase } from '../fields/field-base';

@Directive({
    selector: '[unique]',
    providers: [
        {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => UniqueValueDirective),
          multi: true,
        }]
})
export class UniqueValueDirective implements AfterViewInit, Validator {
    private minLen = 3;
    @HostBinding('attr.minlength') minlen = this.minLen;
    @Input() form: FormGroup;
    @Input() targetField: FieldBase;
    elm: HTMLElement;
    targetFieldCtrl: FormControl;

    constructor(element: ElementRef, private ren: Renderer2) {
        if (element && element.nativeElement) {
            this.elm = element.nativeElement;
        }
    }

    ngAfterViewInit(): void {
        if (this.elm) {
            this.targetFieldCtrl = this.form.controls[this.targetField.internalName.value] as FormControl;
        }

    }

    // Validator:
    validate(c: AbstractControl): { [key: string]: any; } {
        return this.targetField.checkUniqueFunc(this.targetFieldCtrl.value)
            ? {}
            : {notUnique: true};
    }
    registerOnValidatorChange?(fn: () => void): void {
        // nothing to do here...
    }
    // /Validator
}
