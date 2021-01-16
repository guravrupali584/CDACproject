import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"search", component: SearchComponentComponent},
  {path :"signup", component :SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
