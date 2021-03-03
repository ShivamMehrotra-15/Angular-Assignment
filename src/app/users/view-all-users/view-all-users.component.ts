import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css'],
})
export class ViewAllUsersComponent implements OnInit {
  public users = [];
  public headings = [
    'Name',
    'Gender',
    'Email',
    'Mobile',
    'Category',
    'Technology',
  ];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.users = this._userService.getUsers();
  }
}
