import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component{


    render(){
        return (

        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          {JSON.stringify(this.props.books)}
        </div>
        <Shelf title = "Currently Reading" books = {this.props.books}/>
        <Shelf title = "Want To Read" books = {this.props.books}/>
        <Shelf title = "Read" books = {this.props.books}/>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
     )
    }
}

export default ListBooks