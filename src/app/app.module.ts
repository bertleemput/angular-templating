import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { SectionItemDirective } from './section/section-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    SectionItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
