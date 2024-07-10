import { Chat, Message as MessageType } from '../../../../../types/Types'
import avatar4 from '../../../../../assets/avatar-4.png'

interface MessageProps {
    msg: MessageType
    currentChat: Chat
}

const Message: React.FC<MessageProps> = ({ msg, currentChat }) => {
    return (
        <article className={`message ${msg?.received ? 'received' : 'sent'}`}>
            <div className='msg-container'>
                <img src={msg?.received ? currentChat?.avatar : avatar4} alt='Avatar' />
                <div className='msg-content-container'>
                    <div className='talker-indicator' />
                    <p className='msg-content'>{msg?.content}</p>
                </div>
                <p className='msg-time'>{msg?.date}</p>
            </div>
        </article>
    )
}

export default Message
