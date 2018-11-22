import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css'
import Book from './Book'

class ShelfSession extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
    }
    render()
    {
        const { name, books } = this.props;
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(book => {
                  return (
                    <li key={book.id}>
                        <Book title={book.title} authors={book.authors} image={book.image} />
                    </li>
                  )
              })}
                <li>
                  
                </li>
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">The Adventures of Tom Sawyer</div>
                    <div className="book-authors">Mark Twain</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        )
    }
}
export default ShelfSession;