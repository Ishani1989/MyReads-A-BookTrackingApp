import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component{


    render(){
      const books = this.props.books
        return (

        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelf title = "Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")}/>
        <Shelf title = "Want To Read" books={books.filter((book) => book.shelf === "wantToRead")}/>
        <Shelf title = "Read" books={books.filter((book) => book.shelf === "read")}/>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
     )
    }
}

export default ListBooks