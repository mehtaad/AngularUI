import { FieldBase } from './field-base';
import { FieldControlType } from '../enums/field-control-type.enum';

export class FieldText extends FieldBase {
    displayAs: FieldControlType = FieldControlType.Text;
}
