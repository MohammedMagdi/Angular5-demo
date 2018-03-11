
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, Http } from '@angular/http';

import { CoursesComponent } from './courses/courses.component';
import { DataComponent } from './data/data.component';
import { PanelComponent } from './panel/panel.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MockBackend } from '@angular/http/testing';
import { MaterialComponent } from './material/material.component';
import { DialogComponent } from './dialog/dialog.component';

import { NgRedux, NgReduxModule } from 'ng2-redux';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { MatComponentModule } from '../mat-component.module';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';
import { fakeBackendProvider } from '../helpers/fake-backend';
import { PostService } from '../services/post.service';
import { AppErrorHandler } from '../common/app-error-handler';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    CoursesComponent,
    DataComponent,
    PanelComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    AdminComponent,
    NoAccessComponent,
    SignupComponent,
    LoginComponent,
    MaterialComponent,
    DialogComponent,
    DashboardComponent,
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatComponentModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreRoutingModule,
    NgReduxModule
  ],
  exports: [
    RouterModule,
    NavbarComponent,
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {

}
