import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirectiveDirective } from './directives/responsive-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    PersonalInfoComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsiveDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
