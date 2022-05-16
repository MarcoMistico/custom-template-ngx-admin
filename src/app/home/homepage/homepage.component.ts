import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // userId: string;
  // user: User;
  // users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.userStorageService.signOut();
    // if (!environment.isCen) {
    //   this.getUsersHetzner();
    // }
    // else {
    //   this.getUser();
    // }

  }

  // isCen(): boolean {
  //   return environment.isCen;
  // }

  // getUsersHetzner(): void {
  //   this.apiService.getUsersHetzner()
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         // this.users = response.content.filter(x => x.id !== 'utenteProva');
  //         this.users = response.content;
  //       },
  //       error: (err) => {
  //         console.log(err)
  //       }
  //     })
  // }

  // getUser(id?: string): void {
  //   this.apiService.getUser(id)
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         this.user = response;
  //         this.userStorageService.saveUser(this.user);
  //         if (this.user.userTypeRoles.length > 1) {
  //           this.openPopupSelectRole();
  //         }
  //         else {
  //           this.trackLogIn();
  //           this.redirect();
  //         }
  //       },
  //       error: (err: HttpErrorResponse) => {
  //         console.log(err);
  //         if (err.status === 403) {
  //           var basePath = window.location.href.replace('/home', '');
  //           window.location.href = basePath + "/pending-approval/message";
  //         }
  //         // window.location.reload();
  //       }
  //     })
  // }

  // trackLogIn() {
  //   this.apiService.trackLogIn()
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response);
  //       },
  //       error: (err) => {
  //         console.log(err)
  //       }
  //     })
  // }

  // redirect() {
  //   var basePath = window.location.href.replace('/home', '');
  //   var role = this.user.userTypeRoles.length !== 0 ? this.user.userTypeRoles[0] : "";
  //   this.userStorageService.saveRole(role);
  //   if (this.user.userStatusAct === 'NOTACTIVE') {
  //     window.location.href = basePath + "/pending-approval/message";
  //   }
  //   else if (this.user.userStatusAct === 'ACTIVE') {
  //     switch (role) {
  //       case 'OPERATOREPG':
  //         window.location.href = basePath + "/pages/dashboard";
  //         break;
  //       case 'DIRIGENTEPG':
  //         window.location.href = basePath + "/pages/dashboard";
  //         break;
  //       case 'OPERATOREPGNAZIONALE':
  //         window.location.href = basePath + "/pages/dashboard";
  //         break;
  //       case 'ADMINISTRATORS':
  //         window.location.href = basePath + "/admin/dashboard";
  //         break;
  //       case 'SYSTEMADMINS':
  //         window.location.href = basePath + "/admin/dashboard/user-list";
  //         break;
  //       default: break;
  //     }
  //   }
  // }

  // openPopupSelectRole(): void {
  //   const dialogRef = this.dialogService.open(SelectRoleComponent, {
  //     context: {
  //       user: this.user,
  //     },
  //     closeOnBackdropClick: false,
  //     closeOnEsc: false
  //   });
  // }

}
