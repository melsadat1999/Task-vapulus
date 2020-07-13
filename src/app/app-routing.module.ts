import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/contact-list', pathMatch: 'full' },
  { path: 'contact-list', loadChildren: () => import('./pages/contact-list/contact-list.module').then(m => m.ContactListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
