# SpicyBurnz

This app will take you through the fun world of jokes and burns. Be prepared to laugh and share! You are brought to the main page where you have options of:
1. Judging Jokes
1. Make us Laugh

If you choose to Judge the Jokes you will be allowed to pick is either Spicy or Icy. Once you pick a rating for the joke you are then shown the total ratings that were already given by other users. This way the user is not influenced by the previous ratings, so it is more honest.

If you choose to Make us Laugh, a modal will pop up and you can add a joke and choose a category to put the joke in and submit. Once you submit the joke it is added to the database. Then the Juge a Joke page opens and you can see your joke added at the bottom. ??????????The jokes are colored by category?????

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This app requires a number of programs:
* [Node.js](https://nodejs.org/en/)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* NPM Packages: 
	* [Express](https://www.npmjs.com/package/express)
	* [Express-Handlers](https://www.npmjs.com/package/express-handlebars)
	* [Body-Parser](https://www.npmjs.com/package/body-parser)
	* [MySQL](https://www.npmjs.com/package/mysql)
  * [MySQL2]()
	* [dotenv](https://www.npmjs.com/package/dotenv)
  * [fs]()
  * [nightmare]()
  * [npm]()
  * [path]()
  * [sequelize]()
  * [sequelize-cli]()


#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
Eat-Da-Burger
│
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│ 
├──.env
│
├── public
│   ├── assets
│   │	├── css
│   │   │   └── burger_style.css
│   │   ├── img
│   │   │   └── burger.png
│   │   └── js
│   │   	 └── burgers.js
│   │
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    │
    ├── layouts
    │   └── main.handlebars
    │
    └── partials
    	└── burgers
		└── burgers.js
```

## Instructions on setting up and running this app on your computer

#### App Setup

1. Fork a copy to your Github repo and clone it to your computer.

1. Got to your Git Bash and got to into the folder called Eat-Da-Burger.

1. To get all the npm packages required to run this app type into the command line `npm install`

1. Create a server.js file.


#### Database Setup

1. On your computer, open MySQL Workbench and login to a local server you have set up. 

__One option for executing the database code required to run the app is:__

1. Open a new SQL tab for executing queries.

1. Then go back to your chosen text editor (I suggest either Visual Studio or Sublime Text) and open your `Eat-Da-Burger` folder.

1. Inside the `Eat-Da-Burger` folder you will find a folder named `db`.

1. In the `db` folder, open the file named `schema.sql`. Copy the code in the file and paste it to the new SQL tab you opened in MySQL Workbench.

1. Go back to the `db` folder in you text editor and open the `seeds.sql` file and copy the code and paste it into the open tab in MySQL Workbench and execute the code.


__The other option for running the MySQL code is to:__


1. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

1. Now you're going to run these SQL files.

1. Make sure you're in the `db` folder of your app.

1. Start MySQL command line tool and login: `mysql -u root -p`.

1. With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

1. Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

1. Close out of the MySQL command line tool: `exit`.


#### .env file Setup

1. In the command line of the main folder of `Eat-Da-Burger` type `touch .env` 

1. In your text editor, open the `.env` file and type `MYSQL_PASSWORD = "enter your MySQL password here"`

1. Save the file


#### Open App in Browser

1. In the command line go into main folder of `Eat-Da-Burger`

1. Type `node server.js` end hit enter

![Image of Command Line](./public/assets/img/commandline.PNG)

1. Go to your browser and open a new tab and type `localhost:3000` then hit enter

![Image of App in Browser](./public/assets/img/browserimage.PNG)
As you can see from the image there are 3 columns: Ready to Eat da Burger, Devoured Burgers, Order da Burger 


#### Using the App

**Eat da Burger Option**

* In the `Ready to Eat da Burger` column, if you hit the `Devour It !` button it will change the devour status to true in MySQL, which will place the burger in the Devoured Burgers column. This burger will still be listed in MySQL. For example, if you choose to devour the Grilled Onion Cheeseburger, this is what it looks like in MySQL. Note that the Devour number is a 0 which equals true:

	![Image of MySQL Before Devour](./public/assets/img/mysql1.PNG)

* If then I hit the button to devour it, you can see that the Devour number changes to false, which in binary code is 1:

	![Image of MySQL After Devour](./public/assets/img/mysql2.PNG)

**Reorder da Burger**

* You can choose to reorder a burger that was eaten if it sounds good to you. Just hit the `Reoder It` button under Devoured Burgers and it will show as Ready to Eat again.

**Order da Burger**

* You can add or order a burger by going to that column and typing in the name of your favorite buger then hit order. The burger will be added to the Eat da Burger column since the default setting on adding a burger is to set the Devour to true, which places it in that column.

* Here is MySQL before I added the burger:
	
	![Here is MySQL before I added the burger:](./public/assets/img/beforeaddsql.PNG)

* Here I am adding a Egg and Bacon Burger:

	![Here I am adding a Egg and Bacon Burger:](./public/assets/img/addbrowser.PNG)


* This shows the addition to the Ready to Eat da Burger column:

	![This shows the addition to the Ready to Eat da Burger column:](./public/assets/img/afteraddbrowser.PNG)

* And lastly that it was added to MySQL:

	![And lastly that it was added to MySQL:](./public/assets/img/afteraddsql.PNG) 


## Deployment

This application is delployed at [https://still-sea-48695.herokuapp.com/](https://still-sea-48695.herokuapp.com/)


## Author

* [Sara Bracewell](https://github.com/2crazyflowers)

## Acknowledgments

* A big thanks to Sunday coding crew, especially Phil Stubbs who is always, without even trying to, pushing me to do more and better.
* Background Photo by Andrew Walton @w_andrew_j (instagram) on Unsplash

## Issues

* One issue that I have noticed is that there is a lag in time between making changes on the browser and those changes being updated to the browser and MySQL. 


Project Requirements

This document outlines the base requirements for Project 2.


Requirements

Your project must:


Use a Node and Express Web Server;
Be backed by a MySQL Database an ORM (not necessarily Sequelize);
Have both GET and POST routes for retrieving and adding new data;
Be deployed using Heroku (with Data);
Utilize at least one new library, package, or technology that we haven’t discussed;
Have a polished frontend / UI;
Have folder structure that meets MVC Paradigm;
Meet good quality coding standards (indentation, scoping, naming).
Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md



Suggestions

Your project should:


Incorporate Basic Testing Framework, see Project Suggestions;
Use Handlebars for Server-Side Templating
Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
Use an existing public dataset to power the database
Create a migration strategy for sharing data across team members.

Week 16 - Project Suggestions


Overview

Since projects are being worked on this week, you won't have a homework assignment, but a project is a perfect context in which to practice writing tests! 

Incorporate a few of the below suggestions into your project. You'll write better code, and it will help you consolidate your testing habits.




Testing Suggestions


Set up Karma so you can run your tests as you develop.
Prior to implementing a feature, use Nightmare to write a functional test for it.
Prior to implementing a function, use Mocha and Chai to write unit tests against it.
Run your tests prior to committing your code so you can be sure nothing breaks between commits.
Non-Obligatory Bonus: If you're confident and feel like you have some time to tinker, set up Travis CI. This will automatically run your tests whenever you or any of your team members makes a commit.