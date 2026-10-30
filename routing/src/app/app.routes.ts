import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Aboutus } from './aboutus/aboutus';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Notfound } from './notfound/notfound';
import { Profile } from './profile/profile';


export const routes: Routes = [
  { path: '', component: Home },

  { path: 'aboutus', component: Aboutus },
  { path: 'contact', component: Contact },
  { path: 'login', component: Login },
  {
    path:'profile', component:Profile
  },

  {
    path: '**',component: Notfound
  }
];


