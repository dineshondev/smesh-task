export interface UserCSV {
  UniqueName: string;
  PasswordAdapter: string;
  Name: string;
  EmailAddress: string;
  Supervisorpa: string;
  Supervisor: string;
  DefaultCurrency: string;
  LocaleID: string;
  Organization: any;
}


export const userDB: Array<UserCSV> =
  [
    {
      UniqueName: 'aagassi',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Alex Agassi',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'kstabler',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'adavis',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Arnold Davis',
      EmailAddress: 'adavis@gmail.com',
      Supervisor: 'jknott',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'arooney',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Archie Rooney',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'prozelle',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'jknott',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'John Knott',
      EmailAddress: 'john.knott@gmail.com',
      Supervisor: 'adavis',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'admin',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Frantisek Kolar',
      EmailAddress: 'fk@ggmail.com',
      Supervisor: '',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'CZK',
      LocaleID: 'cs_CZ',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'khull',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Kirk Hull',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'krautenberg',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Karl Rautenberg',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'gmcintyre',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'de_DE',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'ksato',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Kenichiro Sato',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'akurosawa',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'kstabler',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Kirk Stabler',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'kstrong',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Kirk Strong',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'psimms',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'ktanner',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Kirsten Tanner',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'fr_FR',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'lbarney',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Larry Barney',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'hmoore',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'de_DE',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'lcsonka',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Lance Csonka',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'ldawson',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Larry Dawson',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'pbrown',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'lgao',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Lan Gao',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'CNY',
      LocaleID: 'zh_CN',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'llittle',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Lance Little',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'lswann',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Lester Swann',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'fr_FR',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'ltaylor',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Lance Taylor',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'psimms',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'mallen',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Mike Allen',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'kstabler',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'mbavaro',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Mike Bavaro',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'psimms',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'de_DE',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'mditka',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Mark Ditka',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'fgifford',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'mli',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Meng Li',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'vlombardi',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'CNY',
      LocaleID: 'zh_CN',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'mmorita',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Mutsumi Morita',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'shoshino',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'msingletary',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Mark Singletary',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'mditka',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'fr_FR',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'msugimoto',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Mari Sugimoto',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'nlopez',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Nia Lopez',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'ltaylor',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'pbrown',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Phil Brown',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'prozelle',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'phornung',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Phil Hornung',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'vlombardi',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'de_DE',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'prozelle',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Paul Rozelle',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: '',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'psampras',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Paul Sampras',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'kstabler',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'psimms',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Pete Simms',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'fgifford',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'pwarfield',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Phil Warfield',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rbrown',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Ronni Brown',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'psimms',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rcraig',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Robert Craig',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rgrange',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Ray Grange',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'dbutkus',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rlott',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Roger Lott',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rmoss',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Raol Moss',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rstaubach',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Robert Staubach',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rtomoda',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Ryuko Tomoda',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'mditka',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'rwhite',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Ron White',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'sconlan',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Sam Conlan',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'sgrogan',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Shawn Grogan',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'shoshino',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Setsuko Hoshino',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'mditka',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'shuff',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Steve Huff',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'psimms',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'skobayashi',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Shizue Kobayashi',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'slargent',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Shawn Largent',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jzorn',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'fr_FR',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'sowen',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Shawn Owen',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'psimms',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'stakida',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Shingo Takida',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'rtomoda',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'stasker',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Shawn Tasker',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'de_DE',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'syoung',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Shawn Young',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'taikman',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tom Aikman',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tbradshaw',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Ted Bradshaw',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tdorsett',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tyler Dorsett',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'fr_FR',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester0',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester0 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester1',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester1 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester2',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester2 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester3',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester3 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester4',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester4 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester5',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester5 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester6',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester6 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester7',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester7 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester8',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester8 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester9',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester9 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tester10',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tester10 User',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'thashimoto',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tetuo Hashimoto',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'pbrown',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'thendricks',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tim Hendricks',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jotto',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'EUR',
      LocaleID: 'de_DE',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tkato',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Takae Kato',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'mditka',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tkurata',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tomohiko Kurata',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tli',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tang Li',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'mditka',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'CNY',
      LocaleID: 'zh_CN',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tmifune',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tomoko Mifune',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'tsenba',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Tadao Senba',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'cnoll',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'JPY',
      LocaleID: 'ja_JP',
      Organization: 'Buyer'
    },
    {
      UniqueName: 'molson',
      PasswordAdapter: 'PasswordAdapter1',
      Name: 'Max Olson',
      EmailAddress: 'nobody@gmail.com',
      Supervisor: 'jmadden',
      Supervisorpa: 'PasswordAdapter1',
      DefaultCurrency: 'USD',
      LocaleID: 'en_US',
      Organization: 'Buyer'
    }
  ];


