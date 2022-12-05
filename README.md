# Project 12 - Sportsee

This repo contains all the source code to run the sports analytics dashboard SportSee.

## 1. General information

To start this project, you will have first to launch the P12-front-end-dashboard API (follow README.md on repo https://github.com/Romain-6793/P12-front-end-dashboard)
and use the available url, for example http://localhost:3000/

## 2. Project

- Fork the repository
- Clone it on your computer.

Before starting the project, first be assured of the API running.
Second, on your terminal, go to the file where your app is supposed to run by typing the following commands :

"cd sportsee"

then type

"yarn start"

if your default port is localhost:3000, the terminal will ask you if it could run on another port (in which your API isn't running), accept.

### 2.1 Prerequisites

- [Yarn](https://yarnpkg.com/)

### 3. Endpoint and queries

### 3.1 Endpoint

This project includes one endpoint that you will be able to use:

- `http://localhost:3000/user/${userId}` - displays information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 3.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
