import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/components/book-create/book-create.component';
import { BookListComponent } from './book/components/book-list/book-list.component';

const routes: Routes = [
  {path:'', component:BookListComponent},
  {path:'create', component:BookCreateComponent},

  //{path: 'Login', redirectTo:LoginUser}
  // {path:'About', component:About},
  // {path:'Create', component:BookCreateComponent},
  // {path:'*', component:Not found},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
