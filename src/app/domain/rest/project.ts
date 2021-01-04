export interface ProjectCSV {
  UniqueName: any;
  Name: string;
  Prefix: string;
  Description: string;
}


export const projectDB: Array<ProjectCSV> =
  [
    {
      UniqueName: 'SM-1',
      Name: 'MetaUI',
      Prefix: 'Meta-',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    },

    {
      UniqueName: 'SM-2',
      Name: 'Infrastructure',
      Prefix: 'IN-',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    }
  ];

