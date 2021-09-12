import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar.module').then(m => m.CalendarModule),
  }
];
export const CALENDAR_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CalendarComponent,
        pathMatch: 'full'
      },
    ]
  }
];