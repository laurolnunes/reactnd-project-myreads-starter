import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'

import Shelf from './Shelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [
      {
        id: 1,
        title: "To Kill a Mockingbird",
        authors: "Harper Lee",
        image: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
      },
      {
        id: 2,
        title: "Ender's Game",
        authors: "Orson Scott Card",
        image: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
      },
    ],
    wantToRead: [
      {
        id: 3,
        title: "1776",
        authors: "David McCullough",
        image: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
      },
    ],
    read: [
      {
        id: 4,
        title: "Harry Potter and the Sorcerer's Stone",
        authors: "J.K. Rowling",
        image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
      },
    ]
  }
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
              <h1>Minha Biblioteca</h1>
            </div>
            <div className="list-books-content">
              <Shelf 
                currentlyReading={this.state.currentlyReading} 
                wantToRead={this.state.wantToRead}
                read={this.state.read}
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
