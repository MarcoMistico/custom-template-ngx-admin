import { Component } from '@angular/core';
import { MENU_ITEMS } from './operator-menu';

@Component({
  selector: 'ngx-operator',
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent {
  menu = MENU_ITEMS;
}
