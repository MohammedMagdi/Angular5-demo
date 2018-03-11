import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../services/auth-guard.service';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', canActivate: [AuthGuard, AdminAuthGuard], loadChildren: './admin/admin.module#AdminModule' },
    { path: 'home', component: HomeComponent },
    { path: 'followers/:id/:username', component: GithubProfileComponent },
    { path: 'followers', component: GithubFollowersComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'no-access', component: NoAccessComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
