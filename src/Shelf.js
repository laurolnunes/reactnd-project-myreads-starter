import React, { Component } from 'react'
import './App.css'
import ShelfSession from './ShelfSession'

class Shelf extends Component {
    render()
    {
        const { currentlyReading, wantToRead, read } = this.props
        return (
        <div>
            <ShelfSession name={'Lendo Atualmente'} books={currentlyReading}/>
            <ShelfSession name={'Quero Ler'} books={wantToRead} />
            <ShelfSession name={'Já Li'} books={read} />
        </div>
        )
    }
}
export default Shelf;