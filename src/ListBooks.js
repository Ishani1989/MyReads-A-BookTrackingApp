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
            query : query.trim(),
            maxResults:5
        })
        if(query){
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
                    {this.state.books ? (
                    <ol className="books-grid">
                    {this.state.books.map((book)=>(
                        <li key={book.id}>
                        {'imageLinks' in book ? (<div className='book-cover' style={{
                            width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`
                             }}/>) : (<div className='book-cover' style={{
                            width: 128, height: 188, backgroundImage: `url("./icons/noimage.jpg")`
                             }}/>)
                        
                        }
                                <p>{book.title}</p>
                            
                        </li>))}
                </ol>):(
                    <div><h4>No results to show</h4></div>
                )}
            </div>
          </div>
          </div>
         
        )
    }

}


export default ListBooks