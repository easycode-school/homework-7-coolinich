import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  constructor(
    public usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => this.users = users);
  }

}
