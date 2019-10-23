import { FieldControlType } from '../enums/field-control-type.enum';
import { FieldBase } from './field-base';

export abstract class ChoiceFieldBase extends FieldBase {
    choices: { text: string, value: string }[] = [];
}
