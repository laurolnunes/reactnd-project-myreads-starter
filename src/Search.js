import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {

    handleSearch = (term) => {
        this.props.onSearch(term)        
    }
    onChangeShelf = (book, shelf) => {
        this.props.onChangeShelf(book, shelf)
    }
    render()
    {
        let books = this.props.books || [] 
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={e => this.handleSearch(e.target.value)}/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {books && books.map(book => {
                        return (
                            <li key={book.id}>
                                <Book book={book} onChangeShelf={this.onChangeShelf}/>
                            </li>
                        )
                    })}                 
                </ol>
                </div>
          </div>
        );
    }
}
export default Search;