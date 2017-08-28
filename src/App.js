import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router';
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

    const {history} = this.props

    return (
      
      <div className="app">
        <Route exact path="/" render ={()=>(
          <ListBooks books = {this.state.books} onChangeShelf = {this.changeShelf}/>
        )}/>
        <Route path ="/search" render ={()=>(
          <SearchBooks books = {this.state.books} onChangeShelf = {(id, shelf)=>{
            this.changeShelf(id, shelf)
            }}/> 
          )}/>
    </div>
  )
}
}
export default BooksApp