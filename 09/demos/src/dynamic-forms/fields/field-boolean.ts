import { FieldBase } from './field-base';
import { FieldControlType } from '../enums/field-control-type.enum';

export class FieldBoolean extends FieldBase {
    displayAs: FieldControlType = FieldControlType.RadioButton;
}
