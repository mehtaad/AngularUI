import { FieldControlType } from '../enums/field-control-type.enum';
import { AbstractControl } from '@angular/forms';
import { HintEvent } from '../hint-event';
import { InternalName } from '../internal-name';

export abstract class FieldBase {
    abstract displayAs: FieldControlType;
    readonly internalName: InternalName;
    defaultValue: string | number | boolean;
    displayName: string;
    required = false;
    placeholder = '';
    checkUniqueFunc: (val: string) => boolean;
    hint: (evt: HintEvent) => void;
    focus: (field: FieldBase, ctrl: AbstractControl, event: FocusEvent) => boolean;
    blur: (field: FieldBase, ctrl: AbstractControl, event: FocusEvent) => boolean;

    constructor(internalName: string, displayName: string) {
        this.internalName = new InternalName(internalName);
        this.displayName = displayName;
    }
}
