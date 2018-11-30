import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'

import Shelf from './Shelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResult: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books})
      })
  }

  onSearch = (term) => {
    BooksAPI.search(term)
      .then((result) => {
        if(result && result.length > 0)
        {
          const booksFoundFiltered = result.map((bookFound) => {
            bookFound.shelf = 'none';
            this.state.books.forEach((book) => {
              if (bookFound.id === book.id) {
                bookFound.shelf = book.shelf;
              }
            })
            return bookFound;
          });
          this.setState({
            searchResult: booksFoundFiltered
          });
        }
        else {          
          this.setState({
            searchResult: []
          });
        }
      })
  }

  onChangeShelf = (book, shelf) => {
    console.log(this.state.books)
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        const updateBooks = this.state.books.filter((b) => b.id !== book.id)
        updateBooks.push(book)

        this.setState({
          books: updateBooks
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' exact render={() => (
          <Search onSearch={this.onSearch} books={this.state.searchResult} onChangeShelf={this.onChangeShelf}/>
        )} />
        <Route path='/' exact render={() => {
          return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>Minha Biblioteca</h1>
            </div>
            <div className="list-books-content">
              <Shelf 
                currentlyReading={this.state.books.filter(book => book.shelf === "currentlyReading")} 
                wantToRead={this.state.books.filter(book => book.shelf === "wantToRead")}
                read={this.state.books.filter(book => book.shelf === "read")}
                />
             </div>
            <div className="open-search">
            <Link to='/search'>
              <button>Add a book</button>
            </Link>  
            </div>
          </div>
          );
        }} />
      </div>
    )
  }
}
export default BooksApp