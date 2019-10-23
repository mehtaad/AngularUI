import { FieldBase } from './field-base';
import { FieldControlType } from '../enums/field-control-type.enum';
import { ChoiceFieldBase } from './choice-field-base';

export class FieldDD extends ChoiceFieldBase {
    displayAs: FieldControlType = FieldControlType.Dropdown;
}
