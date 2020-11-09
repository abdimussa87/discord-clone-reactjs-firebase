import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                Clever Programmer
            <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__channelsLeft">
                        <ExpandMoreIcon />
                        <h3> Text Channels</h3>
                    </div>
                    <AddIcon className='sidebar__addChannel' />
                </div>
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />

            </div>
            <div className="sidebar__call">
                <div className="sidebar__callLeft">

                    <SignalCellularAltIcon className='sidebar__signalIcon' />
                    <div className="sidebar__callInfo">
                        <h3>Voice Connected</h3>
                        <p style={{ color: "gray" }}>Stream</p>
                    </div>
                </div>

                <div className="sidebar__callRight">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>

            </div>
            <div className="sidebar__bottom">
                <Avatar src='' />
                <div className="sidebar__bottomInfo">
                    <h4>Behredin Jemal</h4>
                    <p>#Eqlir</p>
                </div>
                <div className="sidebar__bottomRight">

                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
