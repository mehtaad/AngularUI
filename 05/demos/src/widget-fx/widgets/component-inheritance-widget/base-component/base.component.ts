import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ComponentInheritanceService } from '../../../component-inheritance.service';

@Component({
  selector: 'base-component',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, AfterViewInit {
  constructor(protected svc: ComponentInheritanceService) { }
  name = 'Base';
  content = `This defines base functionality (in the class), base presentation (in
          the stylesheet) and a default structure (in the HTML).  This allows 
          children inheriting from this base to pick and choose the pieces they 
          need to use as-is from the parent and which they need to define on their
          own.`;
  footer: string;
  ngAfterViewInit(): void {
    if (this.footer) {
      setTimeout(() => {
        this.footer += '  (Footer modified in base AfterViewInit)';
      }, 0);
    }
  }
  ngOnInit(): void {
    this.name = `***${this.name}***`;
  }

}
