import { Component, QueryList, AfterContentInit, ContentChildren } from '@angular/core';
import { SectionItemDirective } from './section-item.directive';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements AfterContentInit {


  @ContentChildren(SectionItemDirective)
  items: QueryList<SectionItemDirective>;

  ngAfterContentInit(): void {
    this.items.changes.subscribe(x => console.log(x));
    console.log(this.items);
  }
}
