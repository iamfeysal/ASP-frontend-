import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

/* Routing */
import {AppRoutingModule} from './app-routing.module';



/* Components */
import {AppComponent} from './app.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/auth/login/login.component';
import { SignupComponent } from './main/auth/signup/signup.component';
import { ErrorComponent } from './ui/error/error.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main/main-nav/main-nav.component';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular material */
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularMaterialModule } from './angular-material.module';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderAdministratorComponent } from './shared/header-administrator/header-administrator.component';
import { LayoutAdminComponent } from './shared/layout-admin/layout-admin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutComponent } from './shared/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    MainNavComponent,
    HeaderAdministratorComponent,
    LayoutAdminComponent,
    LayoutComponent,

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
