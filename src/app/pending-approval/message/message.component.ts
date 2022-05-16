import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  timer: number;
  loading = true;

  constructor() { }

  ngOnInit(): void {
    // this.timer = 1;
    // this.loopTimer();
  }

  loopTimer(){
    // if(!this.stopRecursion){
      setTimeout(() => {
        // this.getUser();
        if (this.timer <= 3){
          this.timer++;
        }
        else {
          this.timer=1;
        }
        this.loopTimer();
      },600);
    // }
  }

}
