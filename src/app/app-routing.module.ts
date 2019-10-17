import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './main/auth/login/login.component';
import {SignupComponent} from './main/auth/signup/signup.component';
import {LandingComponent} from './shared/landing/landing.component';


const routes: Routes = [
  {path: 'home', component: LandingComponent,
    // children: [
    //   {
    //     path: '',
    //     component: HomeComponent
    //   }
    // ]
  },
  {path: 'login', component: LoginComponent, },
  {path: 'register', component: SignupComponent},


  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
