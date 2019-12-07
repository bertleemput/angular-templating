import { Component, QueryList, ContentChildren } from '@angular/core';
import { SectionItemDirective } from './section-item.directive';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @ContentChildren(SectionItemDirective)
  items: QueryList<SectionItemDirective>;
}
