import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSectionItem]'
})
export class SectionItemDirective {
  constructor(public template: TemplateRef<any>) { }
}
