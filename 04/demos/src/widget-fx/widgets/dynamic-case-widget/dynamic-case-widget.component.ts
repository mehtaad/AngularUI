import { Component } from '@angular/core';
import { IWidget } from '../../IWidget';
import { UserConfigService } from '../../../app/user-config.service';
import { DisplayCase } from '../../../app/display-case.enum';

@Component({
  selector: 'dynamic-case',
  templateUrl: './dynamic-case-widget.component.html',
  styleUrls: ['./dynamic-case-widget.component.scss']
})
export class DynamicCaseWidgetComponent implements IWidget {
  widgetTitle = 'Dynamic Case';
  constructor(public cfg: UserConfigService) { }

  changeCase() {
    switch (this.cfg.caseSetting) {
      case DisplayCase.AllCaps:
        this.cfg.caseSetting = DisplayCase.AllLower;
        break;
      case DisplayCase.AllLower:
        this.cfg.caseSetting = DisplayCase.Title;
        break;
      case DisplayCase.Title:
        this.cfg.caseSetting = DisplayCase.Default;
        break;
      default:
        this.cfg.caseSetting = DisplayCase.AllCaps;
        break;
    }
  }
}
