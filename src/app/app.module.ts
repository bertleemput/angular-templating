import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { SectionItemDirective } from './section/section-item.directive';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SectionItemDirective,
    BlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
