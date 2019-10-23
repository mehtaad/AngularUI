import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'inherited-child2-component',
  templateUrl: './inherited-child2.component.html',
  styleUrls: ['./inherited-child2.component.scss']
})
export class InheritedChild2Component extends BaseComponent implements OnInit {
  footer = 'This is the footer defined in Child2';
  ngOnInit(): void {
    this.name = 'InheritedChild2';
    this.content = `It uses it's own HTML and stylesheet.  The class still inherits 
                    from base.  The ngOnInit event is raised in this child, which
                    sets the content and then calls the parent ngOnInit to get the 
                    asterisks around the name value.  The AfterViewInit
                    event, however, is not handled by this child, but the event is still
                    raised and handled in the parent (base).  The footer content is
                    modified there.`;
    super.ngOnInit();
  }
}
