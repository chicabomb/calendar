import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/controller/home/home.component';
import { AboutComponent } from './components/controller/about/about.component';
import { NavBarComponent } from './components/pure/nav-bar/nav-bar.component';
import { FooterComponent } from './components/pure/footer/footer.component';
import { CalendarComponent } from './components/pure/calendar/calendar.component';
import { EventComponent } from './components/pure/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    FooterComponent,
    CalendarComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
