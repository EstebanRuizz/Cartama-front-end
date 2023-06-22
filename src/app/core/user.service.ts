import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {
  getUsers(): User[] {
    // Implementation of getting users from the core layer
    // This could include any business logic or validation
    // For simplicity, we'll return a dummy list of users
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];
  }

  // Implement other methods like createUser, updateUser, and deleteUser
}
