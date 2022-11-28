import React from 'react'
import './Mainpage.css'
import Skill from '../Skills/Skill'
import Projlist from '../ProjList/Projlist'

const Mainpage = ({ item }) => {
    return (


        <div className='maindiv'>
            <div className='innerdiv'>
                <div className='l'><Projlist item={item} /></div>
                <div className='r' ><Skill item={item} /></div>

            </div>
        </div>

    )
}

export default Mainpage
