import { UserEntity } from "../entities/user.entity";

export interface GetUsers {
    get: (id: string) => Promise<UserEntity>;
    gets: (data: any) => Promise<UserEntity[]>;
}
