import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { CategorieComponent } from './categorie/categorie.component';
import { MydirectiveDirective } from './mydirective.directive';
import { HighlightDirective } from './highlight.directive';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HeaderComponent } from './header/header.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { from } from 'rxjs';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    StudentsListComponent,
    CategorieComponent,
    MydirectiveDirective,
    HighlightDirective,
    AddstudentComponent,
    HeaderComponent,
    TechnologiesComponent,
    PageNotFoundComponent,
    StudentdetailsComponent,
    ControlPanelComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
