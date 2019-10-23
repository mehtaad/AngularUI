import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'inherited-child1-component',
  templateUrl: '../base-component/base.component.html',
  styleUrls: ['../base-component/base.component.scss', './inherited-child1.component.scss']
})
export class InheritedChild1Component extends BaseComponent implements OnInit {
  footer = 'This is the footer defined in Child1';
  ngOnInit(): void {
    this.name = 'InheritedChild1';
    this.content = `It uses a different class (inherited from base), the base component
       stylesheet, plus it's own stylesheet, but uses the HTML file from the base
       component.  This allows us to specify custom content (in the class), custom
       presentation (in the stylesheet), but the same structure (HTML) as the base
       component.  The ngOnInit event is raised in this child, which
       sets the content but does not call the the parent ngOnInit.  The AfterViewInit
       event, however, is not handled by this child, but the event is still
       raised and handled in the parent (base).  The footer content is
       modified there.`;
  }
}
