import React from 'react'
import './Chat.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import HelpIcon from '@material-ui/icons/Help';
import SendIcon from '@material-ui/icons/Send';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RedeemRoundedIcon from '@material-ui/icons/RedeemRounded';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import Message from './Message';
function Chat() {
    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4>
                        <span className='chat__headerHash'>
                            #
                     </span>
                     Test Channel Name
                </h4>

                </div>

                <div className="chat__headerRight">
                    <NotificationsIcon />
                    <EditLocationIcon />
                    <SupervisedUserCircleIcon />
                    <div className="chat__headerSearch">
                        <input type="text" placeholder='Search' />
                        <SearchRoundedIcon />
                    </div>
                    <SendIcon />
                    <HelpIcon />
                </div>

            </div>
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat__send">
                <AddCircleRoundedIcon />
                <form >
                    <input type="text" placeholder='Type message...' />
                    <button className='chat__sendButton' type='submit'>Send Message</button>
                </form>
                <RedeemRoundedIcon />
                <GifRoundedIcon />
                <EmojiEmotionsRoundedIcon />
            </div>
        </div>
    )
}

export default Chat
