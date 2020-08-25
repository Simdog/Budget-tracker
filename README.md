# Budget-tracker

![](https://img.shields.io/badge/License-MIT-important)

This Budget Tracker is a progressive web application that allows the user to track their finances, with or without internet connection.

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* IndexedDB
* Service Workers
* Cache API

## Table of contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [License](#License)

## Description

This progressive web application does offline functionality by utilizing Service Workers and the Cache API to store static files and API responses in the users local cache. While offline, they may add an expense or deposit, which is stored in their local IndexedDB database. When the application is online again, those transactions are posted from their IndexedDB database to their MongoDB database.The total budget is then updated, and their IndexedDB pending object store is cleared.

## Installation

* Clone the repository to your local device.
* Install the necessary npm packages by typing in the following command in the terminal:

```
npm install
```

## Usage

* This app is simple to run and is set up to use port 3000 for local running. Start the program in terminal with the code below:

```
node server.js 
```

Created a budget tracker using some starter code provided from the bootcamp. It can be used either online or offline with IndexDB and MongoDB.

Deployed Application: https://budget-tracker-elite.herokuapp.com/

![1](/public/images/addbudget.PNG)
![2](/public/images/substractbudget.PNG)
