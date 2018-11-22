import React, { Component } from 'react'
import './App.css'
import ShelfSession from './ShelfSession'

class Shelf extends Component {
    render()
    {
        return (
        <div>
            <ShelfSession name={'Lendo Atualmente'} />
            <ShelfSession name={'Quero Ler'} />
            <ShelfSession name={'Já Li'} />
        </div>
        )
    }
}
export default Shelf;