import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategorieComponent } from './categorie/categorie.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


const routes: Routes = [

  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'addStudent', component: AddstudentComponent },
  { path: 'studentsList', component: StudentsListComponent },
  { path: 'studentdetails/:id', component: StudentdetailsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
