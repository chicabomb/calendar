import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sap-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routes = [
    { name: 'home', path: '' },
    { name: 'about', path: '/about' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
