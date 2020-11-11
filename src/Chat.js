import React, { useEffect, useState } from 'react'
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
import db from './firebase';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';

function Chat() {
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const user = useSelector(selectUser);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                if (snapshot) {
                    setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
                }
            })
        }
    }, [channelId]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim().length > 0) {
            db.collection('channels').doc(channelId).collection('messages').add({
                username: user.displayName,
                photoUrl: user.photo,
                content: message.trim(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(value => {
                setMessage('');
            })
        } else {
            alert('Enter message you want to send')
        }
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4>
                        <span className='chat__headerHash'>
                            #
                     </span>
                        {channelName ? channelName : 'Select channel'}
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
                {messages.length === 0 && <center >
                    <h4 style={{ color: "white" }}>No Messages</h4> </center>}
                {messages.map(({ id, message }) => <Message key={id} username={message.username} timestamp={message.timestamp} photoUrl={message.photoUrl} message={message.content} />)
                }

            </div>
            <div className="chat__send">
                <AddCircleRoundedIcon />
                <form >
                    <input type="text" disabled={channelId == null ? true : false} placeholder={
                        !channelId ? 'Select channel to send Messages' : 'Type message...'} value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className='chat__sendButton' type='submit' onClick={handleSendMessage}>Send Message</button>
                </form>
                <RedeemRoundedIcon />
                <GifRoundedIcon />
                <EmojiEmotionsRoundedIcon />
            </div>
        </div>
    )
}

export default Chat
