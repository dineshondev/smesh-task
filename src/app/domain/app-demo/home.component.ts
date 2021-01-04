import {Component, Inject} from '@angular/core';
import {Task} from '../model/task';
import {DATA_PROVIDERS, DataProvider} from '@ngx-metaui/fiori-rules';
import {User} from '../model/user';
import {projectDB} from '../rest/project';
import {saveRaw} from '../rest/utils';
import {Project} from '../model/project';

@Component({
  selector: 'fdp-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(@Inject(DATA_PROVIDERS) private providers: Map<string, DataProvider<any>>) {
    this.initDefaultTasks();

  }

  private initDefaultTasks() {
    const s = new User('adavis', 'Arnold Davis', 'Reporter', 'adavis@gmail.com',
      '');
    const u = new User('jknott', 'John Knott', 'Reporter', 'john.knott@gmail.com',
      '', s);


    const task1: Task = new Task(
      'T-1', 'Mock for Phase 1', u, u, new Date(), new Date(), 'Done', 'Design',
      'High', new Project(projectDB[0].UniqueName, projectDB[0].Name, projectDB[0].Prefix, projectDB[0].Description),
      '', false);

    const task2: Task = new Task(
      'T-2', 'Implementation Phase 1', u, u, new Date(), new Date(), 'Done', 'Development',
      'Medium', new Project(projectDB[0].UniqueName, projectDB[0].Name, projectDB[0].Prefix, projectDB[0].Description),
      '', false);


    saveRaw(task1, 'tasks');
    saveRaw(task2, 'tasks');
  }
}

