import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false // <-- think long and hard about this!  Understand the implications...
})
export class ImpurePipe implements PipeTransform {
  ctr = 0;
  constructor() {
    console.clear();
  }
  transform(value: any, args?: any): any {
    console.log(this.ctr++);
    return value + ' (transformed by Pipe and updated every time Pipe processes!)';
  }
}
