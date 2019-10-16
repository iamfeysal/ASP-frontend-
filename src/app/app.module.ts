import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

/* Routing */
import {AppRoutingModule} from './app-routing.module';



/* Components */
import {AppComponent} from './app.component';
import { LoginComponent } from './main/auth/login/login.component';
import { SignupComponent } from './main/auth/signup/signup.component';
import { ErrorComponent } from './ui/error/error.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainNavComponent } from './main/main-nav/main-nav.component';
import { LayoutComponent } from './shared/layout/layout.component';
import {DashboardComponent} from './main/dashboard/dashboard.component';
import { LandingComponent } from './shared/landing/landing.component';


/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';


/* Angular material */
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from './angular-material.module';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    MainNavComponent,
    LayoutComponent,
    DashboardComponent,
    LandingComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule {
}
