<h1 align="center">  :sparkles: MyPhoneList  :sparkles:  &nbsp  

</h1>

## About

Boardcamp is a management system of a board game store!

This is an web application where it is possible to register games, separate them by category, enter customers and manage rents.

<div align="center">

![GitHub Org's stars](https://img.shields.io/github/stars/lusntgo?style=social)

</div>

## :hammer: Features

development

## :woman_technologist: Technologies
<p align="center">
    <img style='margin: 5px;' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'>
    <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
</p>

## :tada: How to run

1. Clone this repository
```bash
git clone https://github.com/LuSntgo/Boardcamp-API
```
2. Clone the front-end repository at https://github.com/LuSntgo/Boardcamp and follow the instructions to run
3. Create a Database using the ``dump.sql`` file inside the ``database`` folder by following these steps:
    - 4.1 Open your terminal. **Important: the terminal must be opened in the same path as the ``dump.sql`` file is located.**
    - 4.2 Access PostgreSQL using the command ``sudo su postgres`` and enter your password when prompted.
    - 4.3 Next, type ``psql postgres`` and hit enter.
    - 4.4 Create a database by typing ``CREATE DATABASE boardcamp;`` and hitting enter.
    - 4.5 Type ``\c boardcamp`` and hit enter.
    - 4.6 Finally, type ```psql boardcamp < dump.sql``` and hit enter. Your database should be ready after this step.
4. Set the environment variables by following these steps:
    - 5.1 Create a ``.env`` file in the folder root
    - 5.2 Copy the content of the ``.env.example`` into it
    - 5.3 Set the data
5. In your terminal, go back to the root folder and install the dependencies
```bash
npm i
```
7. Also in the root folder, run the back-end with
```bash
npm start
```
8. Your server should be running now.

9.  In your terminal, go to the root folder and run the tests with:
```bash
npm run test
```



## :sparkles: Author

[<img align="center" src="https://avatars.githubusercontent.com/lusntgo" width=115><br><sub>Luiza Santiago</sub>](https://github.com/lusntgo)