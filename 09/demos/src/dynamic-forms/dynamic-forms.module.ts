import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component/dynamic-form.component';
import { FieldComponent } from './field.component/field.component';
import { UniqueValueDirective } from './directives/unique.directive';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FieldComponent,
    UniqueValueDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {}
