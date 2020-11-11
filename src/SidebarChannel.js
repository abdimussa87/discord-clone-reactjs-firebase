import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'
import './SidebarChannel.css'
function SidebarChannel({ id, name }) {
    const dispatch = useDispatch();
    const handleChannelClick = () => {
        dispatch(setChannelInfo({ channelId: id, channelName: name }));
    }
    return (
        <div className='sidebarChannel' onClick={handleChannelClick}>
            <h4>
                <span className='sidebarChannel__hash'> #</span>  {name}</h4>
        </div>
    )
}

export default SidebarChannel
