import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

class Book extends Component {
    
    render() {
        const { onChangeShelf } = this.props;

        let { book } = this.props;
        let bookCover, authors;

        if (typeof book.imageLinks === 'undefined') bookCover = '';
        else bookCover = book.imageLinks.thumbnail;
        
        if (typeof book.authors === 'undefined') authors = ['No authors'];
        else authors = book.authors       

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${bookCover}")` }}></div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e) => onChangeShelf(this.props.book, e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        )
    }
}
export default Book