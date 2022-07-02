import { RoleType } from "../entities/user.entity";

export interface IUserResponse {
    name: string;
    email: string;
    image?: string;
    activated: boolean;
    google: boolean;
    role: RoleType;
}

export interface DeleteUser {
    delete: (id: string) => Promise<IUserResponse>;
}
