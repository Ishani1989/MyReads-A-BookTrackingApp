import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'


class BooksApp extends React.Component {
  state={
    books : []
  }

  componentDidMount(){
    this.getBooks()
  }

  getBooks(){
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  changeShelf = (id,shelf) => {
    BooksAPI.update(id,shelf).then(()=>{
      this.getBooks()
    })
  }


  render() {
    return (
      
      <div className="app">
        <Route exact path="/" render ={()=>(
          <ListBooks books = {this.state.books}/>
        )}/>
        <Route path ="/search" component ={SearchBooks}/>          
    </div>
  )
}
}
export default BooksApp