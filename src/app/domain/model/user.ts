import {Entity} from '@ngx-metaui/rules';

export class User implements Entity {


  constructor(
    public uniqueName?: string,
    public fullName?: string,
    public organization: string = 'Default',
    public email?: string,
    public phone?: string,
    public supervisor?: User,
    public description?: string) {
  }

  identity(): string {
    return this.uniqueName;
  }


  getTypes(): any {
    return {
      uniqueName: String,
      fullName: String,
      email: String,
      phone: String,
      supervisor: User,
      description: String
    };
  }


  /**
   * Used by MetaUI to identify the name of the class once everything is minified
   */
  className(): string {
    return 'User';
  }

  toString(): string {
    return `${this.fullName} (${this.organization})`;
  }
}
