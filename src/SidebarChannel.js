import React from 'react'
import './SidebarChannel.css'
function SidebarChannel({ id, name }) {
    return (
        <div className='sidebarChannel'>
            <h4>
                <span className='sidebarChannel__hash'> #</span>  {name}</h4>
        </div>
    )
}

export default SidebarChannel
