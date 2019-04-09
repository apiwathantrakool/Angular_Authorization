import { Role } from '../_Constants/Role';

export interface User {
    id: string;
    username: string;
    password: string;
    name: string;
    roles: Role[];
    token?: string;
}
