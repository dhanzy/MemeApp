import User from "./User";

export interface AuthApiDataSuccess {
    "user":{
        "id":23;
        "first_name":"test";
        "last_name":"user";
        "username":"testuser";
        "email":"testuser@gmail.com";
        "is_staff":false;
    };
    "date_of_birth":null;
    "gender":null;
}

export interface AuthApiData {
    error?: { message: string };
    success?: AuthApiDataSuccess;
}