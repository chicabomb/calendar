import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sap-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() group;
  @Input() events;
  @Input() i;

  constructor() { }

  // receive the previous list and checks where should the length of the current event stop
  calculateEventWidth = (events, start) => {
    if (events) { // O(1) - case it's 1st row, don't even bother
      const position = Math.abs(events.findIndex(el => el.end > start)) || 1; // O(n) - returns first item that blocks the current element width
      const W = 100 / events.length * position; // O(1)
      return `calc(${W}% - 16px)`;
    }
    return `calc(100% - 16px)`;
  };

  ngOnInit(): void {}

}
