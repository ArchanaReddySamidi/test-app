import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public errorMessage: string = '';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.users = [];
    this.errorMessage = '';
    this.usersService.getUsers().subscribe((resp: User[]) => {
      this.users = resp;
    }, (err) => {
      this.errorMessage = err?.message;
    });
  }
  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
