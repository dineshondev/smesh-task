import {Component} from '@angular/core';
import {Task} from '../../../domain/model/task';
import {deserialize} from '../../../domain/rest/utils';


@Component({
  selector: 'fdp-portlet-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.scss']
})
export class MyDocumentsComponent {
  tableRows: Array<Task>;

  constructor() {
  }

  ngOnInit() {
    this.tableRows = [];
    const collection = localStorage.getItem('tasks') || '[]';
    const items: any[] = JSON.parse(collection);

    items.forEach((item) => {
        this.tableRows.push(deserialize(item, Task));
    });
  }

}

