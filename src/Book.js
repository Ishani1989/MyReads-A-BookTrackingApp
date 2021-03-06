import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component{

    static propTypes={
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        onChangeShelf: React.PropTypes.func
    }

    change=(event)=> {
        this.props.onChangeShelf(this.props.book.id, event.target.value);
    }

    render(){
        const book=this.props.book

        return(
            <div className="book">
                <div className="book-top">
                    {this.props.book.present==='true'?(<div className="selected"/>):("")}
                    
                    {'imageLinks' in book ? (<div className='book-cover' 
                                                style={{
                                                    width: 128, height: 188, 
                                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                }}/>
                                            ): 
                                            (<div className='no-book' 
                                                style={{
                                                    width: 128, height: 188 }}/>
                                            )
                    }
                    <div className="book-shelf-changer">
                        <select onChange={this.change.bind(this)} defaultValue={'shelf' in book ? (book.shelf):("none")}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{ book.authors ? book.authors.join(', '): ''}</div>
            </div>
        )
    }
}

export default Book