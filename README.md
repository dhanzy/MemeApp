## Meme App

This is a little description about our project.

**Tech Stack:** React.js, Typescript, Django, Postgresql

---

### Getting Started

1. Clone or download repository

---

## server
1. Go into the server directory `cd server`
2. Create your enviroment variable (.env) file
3. Run `python3 manage.py runserver` to start the server

### Register api endpoint
register url -> http://127.0.0.1:8000/auth/users/

Post method to create new user

set "is_staff" to true if you want the user to be an admin

`
{
    "user": {
        "first_name": "",
        "last_name": "",
        "username": "faith",
        "email": "",
        "is_staff": true
    },
    "date_of_birth": null,
    "gender": ""
}
`

Get method to get list of user. Only an admin can get the list of users response

### Login api endpoint

login url -> http://127.0.0.1:8000/auth/token/login/

Post method only
`
{
    "username" : "",
    "password" : ""
}
`

You will get a token as a response

#### Api
 When making a request, the authorization header should be something like this
 
 'Authorization: Token b704c9fc3655635646356ac2950269f352ea1139'

---

## client
1. Go into the client directory `cd client`
2. Run `yarn install` or `npm install` to install packages
3. Run `yarn start` or `npm start` to start the client side

---

### Demo

1. Registration. Users will be able to create a new account using their email and password

![SignUp Demo](demo/images/register.png)

![SignIn Demo](demo/images/login.png)

2. Home. Here is a description about what a user can expect to see

![Home Page](demo/images/home.png)
