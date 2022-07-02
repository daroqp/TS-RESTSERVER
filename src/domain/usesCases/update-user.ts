import { RoleType, UserEntity } from "../entities/user.entity";

export interface IUserResponse {
    name: string;
    email: string;
    image?: string;
    activated: boolean;
    google?: boolean;
    role: RoleType;
}

export interface UpdateUser {
    edit: (id: string, body: UserEntity) => Promise<IUserResponse>;
}
