import {NgModule} from "@angular/core";
import {CalendarService} from "./calendar.service";

@NgModule({})
export class ServicesModule{
    static forRoot(){
        return {
            ngModule: ServicesModule,
            providers: [CalendarService]
        }
    }
}

export {
    CalendarService
}