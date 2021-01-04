import {Component} from '@angular/core';

@Component({
  selector: 'fdp-projects',
  templateUrl: './projects-landing.component.html',
  styleUrls: ['./projects-landing.component.scss']
})
export class ProjectsLandingComponent {
  selectedRows = [];

  allSelected = false;

  tableRows = [
    {
      name: 'MetaUI',
      created: '09/18/2019',
      description: 'All related tasks for MetaUI project',
      prefix: 'ME',
      teams: false
    },
    {
      name: 'Infrastructure',
      created: '09/18/2019',
      description: 'Deployments and maintenance',
      prefix: 'INF',
      teams: false
    }
  ];

  constructor() {
  }


  ngOnInit() {

  }


}


