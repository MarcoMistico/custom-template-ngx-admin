import { Component } from '@angular/core';
import { MENU_ITEMS } from './pending-approval-menu';


@Component({
  selector: 'pending-approval',
  template: `
  <ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
  styleUrls: ['./pending-approval.component.scss']
})
export class PendingApprovalComponent{

  menu = MENU_ITEMS;

}
