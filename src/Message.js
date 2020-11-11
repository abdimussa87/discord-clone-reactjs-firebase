import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'
function Message({ username, message, timestamp, photoUrl }) {
    return (
        <div className='message'>
            <Avatar src={photoUrl} />
            <div className="message__info">
                <h4>{username}
                    <span className='message__timestamp' >{new Date(timestamp?.toDate()).toUTCString()}</span>

                </h4>
                <p>{message}</p>
            </div>

        </div>
    )
}

export default Message
