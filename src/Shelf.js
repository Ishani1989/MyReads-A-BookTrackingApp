import React, {Component} from 'react'
import Book from './Book'


class Shelf extends Component{
     
render(){
    const authors =['Laddu', 'Teddy']
    return(
        <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                <Book image = "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" title = "my book"/>
                </li>
              </ol>
            </div>
          </div>
          </div>
          </div>
    )
}
}

export default Shelf