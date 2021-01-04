/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const UserRule = 'class=User {    field=uniqueName {     label:"Id";   }   field=fullName {     trait:labelField;   }    zLeft => uniqueName => fullName => organization => supervisor#withDetail;   zRight => email => phone;    zBottom => description; } ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 