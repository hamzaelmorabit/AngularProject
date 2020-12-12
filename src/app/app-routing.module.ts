import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { DetailsComponentComponent } from './details-component/details-component.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },

  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent },
  { path: 'details/:id', component: DetailsComponent }
  /*  {path: 'details/:id/:nom/:age', component: DetailsComponent} */
  /*  {path: 'details/:id', component: DetailsComponentComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
