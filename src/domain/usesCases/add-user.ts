import { RoleType, UserEntity } from "../entities/user.entity";

export interface IUserResponse {
    name: string;
    email: string;
    image?: string;
    activated: boolean;
    google: boolean;
    role: RoleType;
}

export interface AddUser {
    add: (user: UserEntity) => Promise<IUserResponse>;
}
