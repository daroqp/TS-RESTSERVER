export class UserEntity {
    id?: string;
    name!: string;
    email!: string;
    image?: string;
    activated!: boolean;
    google?: boolean;
    role!: RoleType;
}

export enum RoleType {
    ADMIN_ROLE = "ADMIN_ROLE",
    USER_ROLE = "USER_ROLE",
}
