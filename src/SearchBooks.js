import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'



class SearchBooks extends Component{
    static propTypes={
        books : PropTypes.array
    }

    state={
        query : ""
    }

    setSearch=(searchRes,myBooks)=> {
        return searchRes.map((book)=>{
          myBooks.forEach((mybook)=>{
            if(mybook.id===book.id){
              book.shelf=mybook.shelf
              book.present="true"
              return
            }
          })
          return book
        })
      }

    updateQuery=(query)=>{
        this.setState({
            query : query.trim(),
            maxResults:5
        })
        if(query.length>1){
        BooksAPI.search(this.state.query, this.state.maxResults).then((books)=> {
            this.setSearch(books, this.props.books)
            this.setState({books: books})
        })}
        else{
            this.setState({books: []})
        }
    }

    clearQuery=()=>{
        this.setState({
            query : ""
        })
    }

    change=(id, shelf)=> {
        const newBooks = this.state.books
        this.props.onChangeShelf(id, shelf)
        newBooks.map((book)=>{
              if(id===book.id){
                  if(shelf==="none"){
                      book.present="false"
                  }
                  else{
                      book.present="true"
                  }
                  book.shelf=shelf
              }
            this.setState({books:newBooks})
    })}

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
                                        <Book book={book}
                                        title={book.title}
                                        onChangeShelf={(id,shelf)=>{
                                        this.change(book.id,shelf)
                                        }}
                                        />
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