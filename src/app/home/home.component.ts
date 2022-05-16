import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template:
  `<ngx-sample1-layout>
  <ngx-homepage></ngx-homepage>
  </ngx-sample1-layout>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
