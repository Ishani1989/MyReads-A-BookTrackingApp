import React, {Component} from 'react'
import Book from './Book'


class Shelf extends Component{
     
render(){
    return(
        <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">

              <ol className="books-grid">
              {this.props.books.map((book)=>(
                <li key={book.id}>
                <Book book={book}
                title={book.title}
                onChangeShelf={(id,shelf)=>{
                  this.props.onChangeShelf(book.id,shelf)}}/>
                </li>))}
              </ol>
            </div>
          </div>
          </div>
          </div>
    )
}
}

export default Shelf