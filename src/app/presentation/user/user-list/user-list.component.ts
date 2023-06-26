import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user/user.model';
import { UserService } from '../../../application/Service/userService/user.service';
import { IListUserDTO } from 'src/app/application/DTO/user/IListUserDTO';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: IListUserDTO[] | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.ListUsers().subscribe({
      next: (userList) => {
        this.users = userList;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  deleteUser(id: number): void {
    console.log(`OKAY ${id}`);
  }
}
