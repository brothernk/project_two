# SpicyBurnz

This app will take you through the fun world of jokes and burns. Be prepared to laugh and share! You are brought to the main page where you have options of:
```
  1. Judging Jokes
  1. Make us Laugh

```

If you choose to Judge the Jokes you will be allowed to pick is either Spicy or Icy. Once you pick a rating for the joke you are then shown the total ratings that were already given by other users. This way the user is not influenced by the previous ratings, so it is more honest.

If you choose to Make us Laugh, a modal will pop up and you can add a joke and choose a category from the drop down menu. Once you submit the joke it is added to the database. Then the Juge a Joke page opens and you can see your joke added at the bottom. 

 The jokes are colored by category:

 * Red = Burns
 * Purple = Bar Jokes
 * Yellow = Coding Jokes
 * Blue = Puns

![Category colors for burns and bar jokes](./public/assets/imgages/burnsbar.PNG)
![Category colors for puns and coding jokes](./public/assets/imgages/punscoding.PNG)



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This app requires two programs to be installed on your computer:
* [Node.js](https://nodejs.org/en/)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)

It also requires a number of NPM Packages: 
	* [Express](https://www.npmjs.com/package/express)
  * [Express-Handlers](https://www.npmjs.com/package/express-handlebars)
	* [Body-Parser](https://www.npmjs.com/package/body-parser)
	* [MySQL](https://www.npmjs.com/package/mysql)
  * [MySQL2](https://www.npmjs.com/package/mysql2)
	* [dotenv](https://www.npmjs.com/package/dotenv)
  * [fs](https://www.npmjs.com/package/fs)
  * [nightmare](https://www.npmjs.com/package/nightmare)
  * [npm](https://www.npmjs.com/package/npm)
  * [path](https://www.npmjs.com/package/path)
  * [sequelize](https://www.npmjs.com/package/sequelize)
  * [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)


#### Directory structure

All the recommended files and folders from the steps above should look like the following structure, which was created that meets MVC Paradigm:

```
project_two
│
├── config
│   └── config.json
│
├── models
│   ├── category.js
│   ├── index.js
│   └── post.js
│
├── node_modules
│ 
├── public
│   └── assets
│   	  ├── css
│       │   ├── bordercorners.svg
│       │   ├── flame.png
│       │   ├── halftone.png
│       │   ├── reset.css
│       │   ├── spicyburnz.svg
│       │   ├── spicyburnzcopy.svg
│       │   └── style.css
│       ├── imgages
│       │   └── 
│       └── js
│           ├── category.js
│           ├── post.js
│      	    └── html-routes.js
│   
├── test
│   └── test.js
│  
├── views
│    ├── layouts
│    │   └── main.handlebars
│    │
│    ├── partials
│    │	  └── joke.handlebars
│		 │ 
│    ├── edit.handlebars
│    │  
│    └── index.handlebars
│        
├── package-lock.json
│
├── package.json
│ 
├── README.md
│
└── server.js

```

## Instructions on setting up and running this app on your computer

#### App Setup

1. Fork a copy to your Github repo and clone it to your computer.

1. Go to your Git Bash and got to into the folder called project_two.

1. To get all the npm packages required to run this app type into the command line `npm install`


#### Database Setup

1. On your computer, open MySQL Workbench and login to a local server you have set up. 

1. Open a new MySQL tab for executing queries. Create a database by adding the following code:

```
  CREATE DATABASE joke_db;
  USE joke_db;
```

1. Then go back to your chosen text editor (I suggest either Visual Studio or Sublime Text) and open your `project_two` folder.

1. Open the `config` folder and go to the config.json file. You will see at the top of the file this code:
```
{
  "development": {
    "username": "root",
    "password": "",
    "database": "joke_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

```  
1. If you use a password for your MySQL, enter it between the quotes so it looks like this: `"password": "your password here"` and save the file.


#### Open App in Browser

1. In the command line go into main folder of `project_two`

1. Type `node server.js` end hit enter

![Image of Command Line](./public/assets/imgages/commandline.PNG)

1. Go to your browser and open a new tab and type `localhost:3000` then hit enter

![Image of App in Browser](./public/assets/imgages/startpage.PNG)
As you can see from the image there are 3 columns: Ready to Eat da Burger, Devoured Burgers, Order da Burger 


#### Using the App

**Make us Laugh**

* In the `Ready to Eat da Burger` column, if you hit the `Devour It !` button it will change the devour status to true in MySQL, which will place the burger in the Devoured Burgers column. This burger will still be listed in MySQL. For example, if you choose to devour the Grilled Onion Cheeseburger, this is what it looks like in MySQL. Note that the Devour number is a 0 which equals true:

* Here is the page when you click the Add a Joke button:

	![Image of Adding a Joke](./public/assets/imgages/addajoke.PNG)


* Here is the database before added a joke:
	![Image of MySQL Before Adding a Joke](./public/assets/imgages/mysqlbeforeadd.PNG)


  * Here is the database after added a joke:
	![Image of MySQL after Adding a Joke](./public/assets/imgages/mysqlafteradd.PNG)


**Judging or Rating Jokes**

* One of the important feature of this app is that you cannot see how others have rated the joke until you do, this keeps you honest as how you rate the joke is not influence by the ratings of others.

* Here is the page before I rated the jokes to be Spicy or Icy:
	
	![Page Before Judging Joke to be Spicy or Icy](./public/assets/imgages/judgejokesbefore.PNG)

* Here is the page after I rated the jokes to be Spicy or Icy:

	![Page After Judging Joke to be Spicy or Icy](./public/assets/imgages/judgejokesafter.PNG)


* Here is the database before rating the jokes:

	![MySQL Before Rating Jokes](./public/assets/imgages/mysqlbefore.PNG)

* Here is the database after rating the jokes:

	![MySQL After Rating Jokes](./public/assets/imgages/mysqlafter.PNG) 


**Sharing a Joke**

One new technology used by us in this app is the share buttons. This allows you to click sharing a joke using either Twitter or FaceBook. [Find out more.](https://developers.facebook.com/docs/plugins/share-button)


## Deployment

This application is delployed at [https://spicyburnz.herokuapp.com/index](https://spicyburnz.herokuapp.com/index)


## The Team of SpicyBurnz
This was a great group of coders to work with, the team members with links to their individual github pages:
* [Jeff Studenski](https://github.com/jstudenski)
* [Sara Bracewell](https://github.com/2crazyflowers)
* [Kate Brothern](https://github.com/brothernk)
* [Chris York](https://github.com/cyork27)

## Acknowledgments

* 

## Issues

* 
