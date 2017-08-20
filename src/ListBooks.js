import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class ListBooks extends Component{
    static propTypes = {
        books : PropTypes.array
    }

    state = {
        query : "",
        maxResults : 5,
        books : []
    }

    updateQuery = (query)=>{
        this.setState({
            query : query.trim()
        })
    }

    clearQuery =()=>{
        this.setState({
            query : ""
        })
    }

    render() {
        const {query} = this.state.query
        const {maxResults} = 5
        
        if(this.state.query){
            
            BooksAPI.search(this.state.query, this.state.maxResults).then((books) => {
                this.setState({books: books})
            })
        }
        else{
            this.state.books = []
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value = {query}
                        onChange ={(event) => this.updateQuery(event.target.value)}/>
                </div>
                </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.map((book)=>(
                <li key={book.id}>
                    <div>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                </li>))
              }
                </ol>
            </div>
          </div>
        )
    }

}


export default ListBooks