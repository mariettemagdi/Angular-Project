import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import CommonModule and RouterModule here
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'] // Fixed typo here
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers(this.currentPage);
  }

  fetchUsers(page: number): void {
    this.http.get<any>(`https://reqres.in/api/users?page=${page}`).subscribe(response => {
      this.users = response.data;
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
    });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.fetchUsers(page);
    }
  }

  goToUserDetail(userId: number): void {
    this.router.navigate(['/user', userId]);
  }
}
