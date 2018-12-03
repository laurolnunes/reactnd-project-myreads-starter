import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css'
import Book from './Book'

class ShelfSession extends Component {
    static propTypes = {
        books: PropTypes.array,
        name: PropTypes.string.isRequired,
    }

    onChangeShelf = (book, shelf) => {
        this.props.onChangeShelf(book, shelf)
    }

    render()
    {
        const { name } = this.props;
        let books = this.props.books || [] 
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(book => {
                  return (
                    <li key={book.id}>
                        <Book book={book} onChangeShelf={this.onChangeShelf}/>
                    </li>
                  )
              })}
              </ol>
            </div>
          </div>
        )
    }
}
export default ShelfSession;