import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  buttonText = 'start';

  numbers = [];

  interval;

  event(numbers) {
    numbers.push(Math.ceil(Math.random() * 100));
  }

  startStop() {
    if (this.buttonText === 'start') {
      this.buttonText = 'stop';
      this.interval = setInterval(this.event, 1000, this.numbers);
    } else {
      this.buttonText = 'start';
      clearInterval(this.interval);
      this.numbers = [];
    }
  }

  ngOnInit() { }

}
