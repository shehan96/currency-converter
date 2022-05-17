<div align="center">

  <h3 align="center">Currency Convertor App</h3>

  <p align="center">
  This is a currency converter app, which users can search for countries and enter an amount in SEK to be converted into local currencies of selected countries. This project was made using open APIs with free licenses.
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot](https://i.postimg.cc/ydR9fq28/Screenshot-2022-05-16-at-17-47-44.png)

This project contains two parts. First we have a backend GraphQL server made with Node.js and secondly we have a frontend made with React.js. Main usage of the app is that you can convert the amount in SEK to local currency.

### Built With

This project is built using the following technologies.

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com)
- [React.js](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Ant Design](https://ant.design/)

<!-- GETTING STARTED -->

## Getting Started

Use following instructions to run the project. Please make sure to have prerequisites before installation.

### Prerequisites

This app requires a node js environment to run, therefore we need to have node js installed in our environment.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the git repo
   ```sh
   git clone https://github.com/shehan96/currency-converter.git
   ```

- Backend installation

2. Navigate inside to the server folder

   ```sh
   cd server
   ```

3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the backend
   ```sh
   npm start
   ```

- Frontend installation

5. Navigate inside to the client folder
   ```sh
   cd server
   ```
6. Install NPM packages
   ```sh
   npm install
   ```
7. Run the frontend
   ```sh
   npm start
   ```

- Visit http://localhost:5000/graphql to access the backend server
- Visit http://localhost:3000 to access the frontend client

## User Credentials

In this project, the backend does not store any data related to the user. Therefore hardcoded email and password is used as user credentials and used for authentication.

Please use following user credentials to generate a JWT token.

- Email : test@gmail.com
- Password : test123

<!-- ROADMAP & TASK TIME BREAKDOWN -->

## Roadmap & Task Time Breakdown

- [x] Backend Server
  - [x] Project setup & structure planning - 1Hr
  - [x] TypeDefs, Queries & Mutations - 3Hr
  - [x] Authentication Middleware - 1Hr
  - [x] Rate limiter setup - 0.5Hr
  - [x] Testing & Finishing - 1Hr
- [x] Frontend Client
  - [x] Project setup & structure planning - 1Hr
  - [x] Home & Login Page Setup - 3Hr
  - [x] Components Creating - 3Hr
  - [x] GraphQL Client Setup - 1Hr
  - [x] Custom Hooks Creating - 1Hr
  - [x] Styling & Testing - 1Hr

<!-- Future Improvements & Implementations-->

## Future Improvements & Implementations

Here I have mentioned some future improvements & implementations which I think makes this app a better one.

- Make improvements for the authentication system by saving user related data in a database without using hardcoded user credentials.
- Allow users to access most popular countries without having a token. Users can use the system up to some limit without authenticating.
- Add error handling functions with more user friendly messages and data.
- Add a function to check exchange rate in real time or add a function to clear data if fetched data is much older.
- Add a function to remove fetched country data from the frontend, if the user wants to.

<!-- DEVELOPER -->

## Developer & Project Link

Developer Name : Shehan Abeyrathne

Project Link : [https://github.com/shehan96/currency-converter](https://github.com/shehan96/currency-converter)
