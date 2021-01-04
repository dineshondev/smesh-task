import {Component} from '@angular/core';

@Component({
  selector: 'fdp-users',
  templateUrl: './users-landing.component.html',
  styleUrls: ['./users-landing.component.scss']
})
export class UsersLandingComponent {

  tableRows = [
    {
      name: 'Frantisek kolar',
      username: 'fkolar',
      supervisor: 'admin',
      roles: 'Admin, Projects, Tasks',
      phone: '+420 605 5555 88'
    },
    {
      name: 'Eric Reed',
      username: 'ereed',
      supervisor: 'jknott',
      roles: 'Tasks',
      phone: '+1 650 824-8830'
    },
    {
      name: 'John Knott',
      username: 'jknot',
      supervisor: 'fkolar',
      roles: 'Tasks',
      phone: '+1 650 820-8030'
    }
  ];

  constructor() {
  }


  ngOnInit() {

  }


}


