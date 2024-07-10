import { useContext, useEffect } from 'react'
import Context from '../../../../context/Context'
import MessageComponent from './Message/Message'
import { Chat, ContextType, Message } from '../../../../types/Types'

interface ConversationContainerProps {
    fixedScroll: React.RefObject<HTMLSpanElement>
}

const ConversationContainer: React.FC<ConversationContainerProps> = ({ fixedScroll }) => {
    const { currentChat, activeChats } = useContext(Context) as ContextType
    const activeChat = activeChats?.filter((chat: Chat) => chat?.id === currentChat?.id)[0]

    useEffect(() => {
        fixedScroll?.current?.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <div className='conversation-container'>
            {currentChat?.messages &&
                activeChat?.messages?.map((msg: Message) => (
                    <MessageComponent msg={msg} key={msg?.msgId} currentChat={currentChat} />
                ))}
            <span ref={fixedScroll}></span>
        </div>
    )
}

export default ConversationContainer
