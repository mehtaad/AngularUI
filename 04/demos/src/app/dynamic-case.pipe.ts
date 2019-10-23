import { Pipe, PipeTransform, Input } from '@angular/core';
import { DisplayCase } from './display-case.enum';

@Pipe({
  name: 'dynamicCase'
})
export class DynamicCasePipe implements PipeTransform {
  constructor() { }

  transform(value: string, args?: any): any {
    if (!value) {
      return value;
    }
    switch (args) {
      case DisplayCase.AllCaps:
        return value.toUpperCase();
      case DisplayCase.AllLower:
        return value.toLowerCase();
      case DisplayCase.Title:
        return this.toTitleCase(value);
      default:
        return value;
    }
  }

  private toTitleCase(value: string) {
    return value.split(/\b/g).map(word => this.titleCaseWord(word)).join('');
  }
  private titleCaseWord(word: string) {
    if (!word) {
      return word;
    }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
}
