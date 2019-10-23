import { FieldBase } from './field-base';
import { FieldControlType } from '../enums/field-control-type.enum';

export class FieldNote extends FieldBase {
    displayAs: FieldControlType = FieldControlType.Note;
}
