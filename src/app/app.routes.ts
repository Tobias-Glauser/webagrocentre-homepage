import {Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {redirectGuard} from "./redirect.guard"

export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'frigate', canActivate: [redirectGuard], data: { externalUrl: 'http://webagrocentre/frigate' }, component: HomepageComponent},
  {path: 'vnc-optical-sorter', canActivate: [redirectGuard], data: { externalUrl: 'http://webagrocentre/vnc-optical-sorter' }, component: HomepageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
