import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HPP Karting Laptimes';
  constructor(public auth: AngularFireAuth, public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(UserDialogComponent, {
      width: 'auto'
    });
  }
}

@Component({
  selector: 'user-dialog',
  template: '<ngx-auth-firebaseui-user (onSignOut)="userSignOut()"></ngx-auth-firebaseui-user>',
})
export class UserDialogComponent {

  constructor(private router: Router, public dialog: MatDialog) { }

  userSignOut() {
    this.router.navigateByUrl("login");
    this.dialog.closeAll();
  }
}
