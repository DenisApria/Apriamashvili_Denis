import { Component, EventEmitter, Output } from '@angular/core';
import { ParentUser } from './parent-user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apriamashvili_Denis';

  users = [
    {
      Firstname: 'Mike',
      Lastname: 'Mikes',
      Age: 15
    },
    {
      Firstname: 'Dan',
      Lastname: 'Dans',
      Age: 21
    },
    {
      Firstname: 'Adam',
      Lastname: 'Adams',
      Age: 29
    },
    {
      Firstname: 'John',
      Lastname: 'Johns',
      Age: 21
    },
    {
      Firstname: 'Luke',
      Lastname: 'Lukes',
      Age: 18
    },
  ]
  
  parentUser: ParentUser[] = [
    {
      Id: 1,
      Firstname: 'Adam',
      Lastname: 'Adams',
      Dateofbirth: '15/12/2004',
      Phonenumber: '123123123',
      Email: 'adam@gmail.com'
    },
    {
      Id: 2,
      Firstname: 'Mike',
      Lastname: 'Mike1',
      Dateofbirth: '13/10/2000',
      Phonenumber: '12341241',
      Email: 'mike@gmail.com'
    },
  ];

}
