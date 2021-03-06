# Gusto & RemoteTeam Bootcamp Week-3

This project is about JWT and Session Authentication with TypeScript. Project starts with login page. If user does not have an account, needs to visit sign up page.
After registration, the user is directed to the dashboard page.If user correctly enters the credentials,directed to the login page. After logging in, the user's unique id and browser informations are kept in session and in token. If user's browser informations which kept in session and token does not match with each others, user can not be authenticated.

# [Live Demo](https://typeormauth.herokuapp.com/)

### Main dev tools used:

`NodeJS & ExpressJS` - `TypeOrm` - `MySQL` - `Typescript` - `EJS`

#### Other Dependencies

- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation

Clone the project to your local repository

```bash
https://github.com/Kodluyoruz-NodeJs-Bootcamp/week3-ardacoskun.git
```

Install the dependencies of the project

```bash
npm install
```

## Usage

```bash
npm run build
```

```bash
npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
