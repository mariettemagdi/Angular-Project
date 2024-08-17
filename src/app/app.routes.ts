import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component'; // Ensure this component exists

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent }
];


