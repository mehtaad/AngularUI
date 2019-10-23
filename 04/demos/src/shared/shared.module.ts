import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectorDirective, NotClassSelectorDirective,
  ClassSelectorDirective, ElementSelectorDirective, QualifiedElementSelectorDirective } from './directives/selector-directives';
import { RandomColorDirective } from './directives/random-color.directive';
import { PasswordMinLenDirective } from './directives/min-len.directive';
import { ValPropDirective } from './directives/val-prop.directive';
import { CheckActiveDirective } from './directives/check-active.directive';
import { ClickListenerDirective } from './directives/click-listener.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ElementSelectorDirective,
    QualifiedElementSelectorDirective,
    ClassSelectorDirective,
    NotClassSelectorDirective,
    MultiSelectorDirective,
    RandomColorDirective,
    PasswordMinLenDirective,
    ValPropDirective,
    CheckActiveDirective,
    ClickListenerDirective
  ],
  exports: [
    ElementSelectorDirective,
    QualifiedElementSelectorDirective,
    ClassSelectorDirective,
    NotClassSelectorDirective,
    MultiSelectorDirective,
    RandomColorDirective,
    PasswordMinLenDirective,
    ValPropDirective,
    CheckActiveDirective,
    ClickListenerDirective
  ]
})
export class SharedModule { }
