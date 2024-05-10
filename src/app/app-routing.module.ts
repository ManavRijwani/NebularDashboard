import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbSidebarComponent } from '@nebular/theme';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToastserviceComponent } from './toastservice/toastservice.component';

const routes: Routes = [

  { path: '', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
   
  {
    path: 'toastservice',
    component: ToastserviceComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
