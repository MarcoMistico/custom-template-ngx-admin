import {Component, OnDestroy} from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-sample1-layout',
  styleUrls: ['./sample1.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-column class="main-content">
        <ng-content></ng-content>
      </nb-layout-column>

    </nb-layout>
  `,
})
export class Sample1LayoutComponent implements OnDestroy {


  constructor() {

  }

  ngOnDestroy() {
  }
}
