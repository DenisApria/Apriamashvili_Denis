import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() users: ParentUser[] = [];


  @Output() usersFromChild: EventEmitter<ChildUser[]> = new EventEmitter<ChildUser[]>();

  childUsers: ChildUser[] = [
    {
      Id: 1,
      Firstname: 'Alice',
      Lastname: 'Johnson',
      Dateofbirth: '10/15/1990',
      Phonenumber: '111111111',
      Email: 'alice@gmail.com'
    },
    {
      Id: 2,
      Firstname: 'Bob',
      Lastname: 'Smith',
      Dateofbirth: '05/20/1985',
      Phonenumber: '123123111',
      Email: 'bob@gmail.com'
    },
  ];

  emitUsersToParent() {
    this.usersFromChild.emit(this.childUsers);
  }


  constructor(private displayService: DisplayService) {}

  displayUsersUsingService(): void {
    this.displayService.displayUsers(this.users);
  }
}
