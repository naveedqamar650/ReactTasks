import React from 'react'
import './Skills.css'

const Skill = ({ item }) => {
    return (
        <>
            <div className='menudiv'>
                <div className='paradiv'>{item.skills.map((obj) => <p className='para'>{obj.s}</p>)}</div>

            </div>
        </>
    )
}

export default Skill
