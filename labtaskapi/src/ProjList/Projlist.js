import React from 'react'
import './Projlist.css'
const Projlist = ({ item }) => {
    return (
        <div className='rightdiv'>
            <div className='paradiv'>{item.listofproj.map((obj) => <p className='para'>{obj.p}</p>)}</div>

        </div>
    )
}

export default Projlist
