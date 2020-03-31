import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sap-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() events;
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {}
}
