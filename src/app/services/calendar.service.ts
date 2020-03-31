import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CalendarService {
  constructor() {
    eval("window.layOutDay=this.setEvents;");
    this.setEvents(this.initialEvents);
  }

  initialEvents = [
    {title: 'Daily', description: `tell us what you did and what you're planning to do next, also share if you have any blockers`, start: 30, end: 150},
    {title: 'Sprint Retrospective', description: `let's see what we producesd in this last cycle`, start: 540, end: 600},
    {title: 'All hands', description: 'company get-together to discuss the corona status', start: 560, end: 620},
    {title: 'team beers', description: `let's meet at Peter's bar to celebrate the sprint end`, start: 610, end: 670}
  ];

  eventsSource = new BehaviorSubject<any>([]);

  events = this.eventsSource.asObservable();

  setEvents = (input?: { title: string; description: string; start: number; end: number; }[]) => { //O(n.logn)
    input = input || this.initialEvents;
    const newEvents = [];
    input
      .sort((a,b) => a.start - b.start) // let's assume this uses merge-sort, thus worst case O(n.logn), also for memory
      .forEach((el, i) => { // O(n)
        el === input[0] || el.start > input[i-1].end || el.start > newEvents[newEvents.length - 1][0].end
          ? newEvents.push([el])
          : newEvents[newEvents.length - 1].push(el);
      });
    this.eventsSource.next(newEvents);
    return 'Events Updated';
  };
}
