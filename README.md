

## My Reads Project

The MyReads project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

Currently Reading<br />
Want to Read<br />
Read<br />

### Home Screen

![alt text](https://github.com/Ishani1989/MyReads-A-BookTrackingApp/blob/master/screenshots/HomeScreen.JPG "Bookshelf Screen")

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.The main page also has a link to /search, a search page that allows you to find books to add to your library.<br /><br />

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.<br />

###Search Screen

![alt text](https://github.com/Ishani1989/MyReads-A-BookTrackingApp/blob/master/screenshots/SearchScreen.JPG "Search Screen")

## Files Information
```
+--public/    
 |-- index.html
 |-- favicon.ico - React Icon.
+-- src/
 +-- icons/ - Helpful images for the app.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
  |-- noimage.jpg - image in case book image is absent
  |-- shelf.jpg - background image for shelf
 |-- App.js - This is the root of the app. Contains child compoenets for search and displaying books.
 |-- App.css - Styles for the app. 
 |-- App.test.js - Used for testing. Provided with Create React App. 
 Testing is encouraged, but not required.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. 
 Instructions for the methods are below.
 |-- index.js -  It is used for DOM rendering only.
 |-- index.css - Global styles.
|-- .gitignore 
|-- CONTRIBUTING.MD - Information about contributing to this repo. 

|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms 
 to use with the app.
|-- package.json - npm package manager file.
```


## Backend Server

 The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods  to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Dependency :

npm version 3.10.10

## To Run the App:

* Clone/download the repo.
* Open a terminal in project directory
* Run `npm install` to install the required dependencies
* Run the command `npm start` to start the local server.
* App opens up on its own at port `localhost:3000`

## Tested Env

Tested in Chrome version 57.0.2987.133 at zoom level : 80%

## History

First checkin done on Aug 20, 2017

## Credits

ishanibhattacharjee@gmail.com<br />
https://github.com/udacity/reactnd-project-myreads-starter<br />
https://stackoverflow.com<br />
https://reacttraining.com/<br />