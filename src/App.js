import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'


class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
        books: [],
        showSearchPage: false,
        current: [],
        wantToRead:[],
        read:[]

    };
    this.closeSearch = this.closeSearch.bind(this);
 
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  closeSearch(){
    this.setState({showSearchPage : false})
  }

  render() {
    return (
      
      <div className="app">
        <Route exact path="/" render ={()=>(
          <ListBooks/>
        )}/>
        <Route path ="/search" component ={SearchBooks}/>          
    </div>
  )
}
}
export default BooksApp