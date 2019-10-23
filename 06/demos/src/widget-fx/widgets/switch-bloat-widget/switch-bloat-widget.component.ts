import { Component, ViewChild, TemplateRef } from '@angular/core';
import { IWidget } from '../../IWidget';

@Component({
  selector: 'switch-bloat-widget',
  templateUrl: './switch-bloat-widget.component.html',
  styleUrls: ['./switch-bloat-widget.component.scss']
})
export class SwitchBloatWidgetComponent implements IWidget {
  @ViewChild('template1') t1: TemplateRef<any>;
  @ViewChild('template2') t2: TemplateRef<any>;
  @ViewChild('template3') t3: TemplateRef<any>;

  widgetTitle = 'Switch Bloat';
  switchVar1 = 'a';
  switchVar2 = 'a';
  switchVar3 = 'a';

  getTemplate(): TemplateRef<any> {
    switch (this.switchVar3) {
      case 'a':
        return this.t1;
      case 'b':
        return this.t2;
      case 'c':
        return this.t3;
    }
    return this.t3;
  }

  changeSwitchVar() {
    switch (this.switchVar3) {
      case 'a':
        this.switchVar1 = 'b';
        this.switchVar2 = 'b';
        this.switchVar3 = 'b';
        break;
      case 'b':
        this.switchVar1 = 'c';
        this.switchVar2 = 'c';
        this.switchVar3 = 'c';
        break;
      case 'c':
      default:
        this.switchVar1 = 'a';
        this.switchVar2 = 'a';
        this.switchVar3 = 'a';
        break;
    }
  }
}
