import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsComponent } from './lists/lists.component'
import { Page1Component } from './page1/page1.component'


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'lists', component: ListsComponent},
  { path: 'page1', component: Page1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
