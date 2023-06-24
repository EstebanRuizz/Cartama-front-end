import { Component, OnInit } from '@angular/core';
import { User } from '../../core/user.model';
import { UserApplicationService } from '../../application/user.application.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] | null = null;

  constructor(private userAppService: UserApplicationService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userAppService.getUsers();
  }

  // Implement other methods for creating, updating, and deleting users
}
