import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBooks extends Component{
    static propTypes = {
        books : PropTypes.array
    }

    state = {
        query : ""
    }

    setSearch = (arr,Arr) => {
        return arr.map((item)=>{
          Arr.forEach((Item)=>{
            if(Item.id === item.id){
              item.shelf = Item.shelf
              return
            }
          })
          return item
        })
      }

    updateQuery = (query)=>{
        this.setState({
            query : query.trim(),
            maxResults:5
        })
        if(query.length>1){
        BooksAPI.search(this.state.query, this.state.maxResults).then((books) => {
            this.setState({books: books})
        })}
        else{
            this.setState({books: []})
        }
    }

    clearQuery =()=>{
        this.setState({
            query : ""
        })
    }

    render() {
        const {query}=this.state.query
    
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to='/' className='close-search'></Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
                </div>
                <div className="search-books-results">
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>Your Search:</h1>
                        </div>
                        <div>
                            {this.state.books ? (
                                <ol className="books-grid">
                                {this.state.books.map((book)=>(
                                    <li key={book.id}>
                                        <Book book = {book}
                                        title = {book.title}
                                        onChangeShelf={(id,shelf)=>{
                                        this.props.onChangeShelf(book.id,shelf)}}/>
                                            <p>{book.title}</p>
                                    </li>))}
                                </ol>):(
                                <div><h4>No results to show</h4></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
         
        )
    }

}


export default SearchBooks