import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/contact-list', pathMatch: 'full' },
  { path: 'contact-list', loadChildren: () => import('./contact-list/contact-list.module').then(m => m.ContactListModule) }, 
  { path: 'contact-details', loadChildren: () => import('./contact-list/contact-details/contact-details.module').then(m => m.ContactDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
