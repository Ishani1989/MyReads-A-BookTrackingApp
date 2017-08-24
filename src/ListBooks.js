import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component{

    state = {
        books: [],
        current: [],
        wantToRead:[],
        read:[]
    }

    render(){
        return (

        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Shelf title = "Currently Reading"/>
        <Shelf title = "Want To Read"/>
        <Shelf title = "Read"/>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
     )
    }
}

export default ListBooks