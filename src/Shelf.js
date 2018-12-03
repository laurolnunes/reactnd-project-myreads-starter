import React, { Component } from 'react'
import './App.css'
import ShelfSession from './ShelfSession'

class Shelf extends Component {
    render()
    {
        const { currentlyReading, wantToRead, read, onChangeShelf } = this.props
        return (
        <div>
            <ShelfSession name={'Lendo Atualmente'} books={currentlyReading} onChangeShelf={onChangeShelf}/>
            <ShelfSession name={'Quero Ler'} books={wantToRead}  onChangeShelf={onChangeShelf}/>
            <ShelfSession name={'Já Li'} books={read}  onChangeShelf={onChangeShelf}/>
        </div>
        )
    }
}
export default Shelf;