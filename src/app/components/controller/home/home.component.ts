import { Component, OnInit, NgZone } from '@angular/core';
import { CalendarService } from 'src/app/services/services.module';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CalendarService],
})

export class HomeComponent implements OnInit {
  times = Array(25)
    .fill(0)
    .map((el, i) => el = new Date(null, null, null, 9+i/2, i % 2 ? 30 : 0));
  events = [];
  subscription: Subscription;

  constructor(
    private calendar: CalendarService,
    private zone: NgZone,
  ) {
    this.subscription = this.calendar
    .events
    .subscribe(el => this.zone.run(() => this.events = el)); // O(1) - checks the stream every push of the observable
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe(); // O(1)
  }
}
