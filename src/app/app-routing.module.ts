import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home/home-routing.module';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full', canActivate: [LoggedInGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
