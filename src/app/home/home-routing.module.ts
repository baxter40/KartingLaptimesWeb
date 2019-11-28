import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';

const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [LoggedInGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
