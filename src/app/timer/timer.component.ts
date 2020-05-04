import { Component, OnInit } from "@angular/core";

@Component({ selector: "timer", templateUrl: "./timer.component.html" })
export class TimerComponent {
  constructor() {
    this.minutes = 25;
    this.seconds = 59;
    this.started = false;
    this.interval = 59;
  }

  started: boolean;
  minutes: number;
  seconds: number;
  newMin: number;
  interval: any;

  min: any;
  sec: any;

  resetVariables(mins, secs, started) {}

  start() {
    if (!this.started) {
      this.sec = setInterval(() => {
        if (this.seconds === 0 && this.minutes == 0) {
          clearInterval(this.sec);
          this.started = false;
        } else if (this.seconds == 0) {
          this.seconds = this.interval;
          this.minutes--;
        } else {
          this.seconds--;
        }

        console.log(this.seconds);
      }, 1000);
    }
    this.started = true;
  }
  addFive() {
    this.minutes += 5;
    this.seconds = 0;

    // if (this.started) {
    //   this.stop();
    //   this.start();
    // }
  }
  minusFive() {
    if (this.minutes >= 5) {
      this.minutes -= 5;
      this.seconds = 0;
      //  this.interval = 59;

      //   if (this.started) {
      //     this.stop();
      //     this.start();
      //   }
    }
  }

  stop() {
    clearInterval(this.sec);
    console.log("stopping");
    this.started = false;
  }
  reset() {
    this.seconds = 59;
    this.minutes = 25;
    this.interval = 59;
  }
  intervalCallback() {}
}
