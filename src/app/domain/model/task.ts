import {Entity} from '@ngx-metaui/rules';
import {User} from './user';
import {Project} from './project';

export class Task implements Entity {

  constructor(public uniqueName?: string,
              public name: string = 'Untitled Task',
              public reporter?: User,
              public assignee?: User,
              public createdDate?: Date,
              public dueDate?: Date,
              public status: string = 'Not Started',
              public category: string = 'Design',
              public priority: string = 'Medium',
              public project?: Project,
              public description?: string,
              public isShared?: boolean) {
    this.createdDate = new Date();
  }


  identity(): string {
    return this.uniqueName;
  }


  getTypes(): any {
    return {
      uniqueName: String,
      name: String,
      reporter: User,
      assignee: User,
      createdDate: Date,
      dueDate: Date,
      status: String,
      category: String,
      priority: String,
      project: Project,
      description: String,
      isShared: Boolean
    };
  }


  className(): string {
    return 'Task';
  }
}
