import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'

import Shelf from './Shelf'
import Search from './Search'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path='/search' exact render={() => (
          <Search />
        )} />
        <Route path='/' exact render={() => {
          return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf />
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
