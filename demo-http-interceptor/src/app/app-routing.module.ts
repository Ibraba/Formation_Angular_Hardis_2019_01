import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormModelComponent } from './form-model/form-model.component';

const routes: Routes = [
  {path: 'users',         component: UserComponent},
  {path: 'form-model',    component: FormModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
