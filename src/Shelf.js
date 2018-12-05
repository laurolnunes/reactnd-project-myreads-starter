import React, { Component } from 'react'
import './App.css'
import ShelfSession from './ShelfSession'

const Shelf = function (props) {
    return (
        <div>
            <ShelfSession name={'Lendo Atualmente'} books={props.currentlyReading} onChangeShelf={props.onChangeShelf}/>
            <ShelfSession name={'Quero Ler'} books={props.wantToRead}  onChangeShelf={props.onChangeShelf}/>
            <ShelfSession name={'Já Li'} books={props.read}  onChangeShelf={props.onChangeShelf}/>
        </div>
        )
}
export default Shelf;