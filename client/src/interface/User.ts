
interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    is_staff?: boolean;
}

export default interface User {
    user: IUser;
    gender: "Male" | "Female";
    date_of_birth: Date;
}