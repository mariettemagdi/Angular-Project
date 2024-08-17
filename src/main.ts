import { bootstrapApplication } from '@angular/platform-browser';
import {  RouterModule,Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { UserListComponent } from './app/user-list/user-list.component';
import { UserDetailComponent } from './app/user-detail/user-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  
  ],
});
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
