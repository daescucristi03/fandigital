import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './pages/misc/about-us/about-us.component';
import path from 'node:path';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store/store.component';
import { ContactComponent } from './pages/misc/contact/contact.component';

const routes: Routes = [
{ path:'', component:HomeComponent },
{ path:'about', component:AboutUsComponent },
{ path:'store', component:StoreComponent },
{ path:'contact', component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
