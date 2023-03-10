import { Roles } from './Roles';

export interface User {
  _id: string
  name: string
  email: string
  role: Roles
}
