import React, {Component} from 'react'
import { PropTypes } from 'prop-types'

class Book extends Component{

    static propTypes = {
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.array
    }

render(){
    const book = this.props.book
    return(
        <div className="book">
        <div className="book-top">
        {'imageLinks' in book ? (<div className='book-cover' style={{
                                    width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`
                                    }}/>
                                    ) : (<div className='book-cover' style={{
                                             width: 128, height: 188, backgroundImage: `url("./icons/noimage.jpg")`
                                            }}/>)
                                    }
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        {/*{this.props.author && this.props.author.map((author,index)=>(
            <div
              className="book-authors"
              key={index}
            >{author}</div>))}*/}
      </div>
    )
}
}

export default Book