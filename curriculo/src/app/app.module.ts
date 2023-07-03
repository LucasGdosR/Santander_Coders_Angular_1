import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftColumnComponent } from './components/left-column/left-column.component';
import { RightColumnComponent } from './components/right-column/right-column.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionComponent } from './components/section/section.component';
import { FormComponent } from './components/form/form.component';
import { EducationComponent } from './components/right-column/education/education.component';
import { WorkExperienceComponent } from './components/right-column/work-experience/work-experience.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LeftColumnComponent,
    RightColumnComponent,
    FooterComponent,
    SectionComponent,
    FormComponent,
    EducationComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
