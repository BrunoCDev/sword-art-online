import React, { Component } from 'react'
import './index.css'
import banner from './Images/banner2.png'
import 'normalize.css'

import Menu from './Semantic/menu'
import Bar from './Semantic/bars'
import Grid from './Semantic/grid'

class Layout extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className='background'>
                 <Grid/>
            </div>
        )
    }
}

export default Layout