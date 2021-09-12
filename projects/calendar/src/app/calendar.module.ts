  
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CALENDAR_ROUTES } from './app.routes';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CALENDAR_ROUTES),
  ],
  providers: [],
})
export class CalendarModule { }