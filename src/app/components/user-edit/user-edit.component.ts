import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-user-edit-component',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public user: User = {
    id: 0,
    name: '',
    username: '',
    email: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.user.id = this.route.snapshot.params['id'];
    this.usersService.getUser(this.user.id.toString()).subscribe((user) => {
      this.user = user;
    });
  }

  // Submit changes in User data, navigation back to Users list
  onSubmitHandler() {
    this.usersService.editUser(this.user).subscribe((user) => {
      this.router.navigate(['/users']);
    },
    (err) => console.log(err));
  }
}
