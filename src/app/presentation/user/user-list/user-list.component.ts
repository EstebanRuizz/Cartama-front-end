import { Component, OnInit } from '@angular/core';
import { IListUserDTO } from 'src/app/application/DTO/user/IListUserDTO';
import { UserCommand } from '../../../application/features/user/commands/User.commands';
import { UserQuery } from '../../../application/features/user/queries/UserQueries';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: IListUserDTO[] | null = null;

  constructor(
    private readonly userCommand: UserCommand,
    private readonly userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // this.userQuery.ListUsers().subscribe({
    //   next: (userList) => {
    //     this.users = userList;
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   },
    // });
  }

  deleteUser(id: number): void {
    console.log(`OKAY ${id}`);
  }
}
