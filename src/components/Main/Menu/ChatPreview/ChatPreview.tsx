import Context from '../../../../context/Context'
import { useContext } from 'react'
import { Chat, ContextType } from '../../../../types/Types'

interface ChatPreviewProps {
    chat: Chat
    hidenMenu: boolean
    windowSize: number | undefined
    setHidenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const ChatPreview: React.FC<ChatPreviewProps> = ({ chat, hidenMenu, windowSize, setHidenMenu }) => {
    const shortenText = (text: string) => (text.length > 50 ? text.slice(0, 50 - 1) + '…' : text)

    const { currentChat, setCurrentChat } = useContext(Context) as ContextType

    return (
        <article
            className={`chatPreview ${currentChat?.id === chat?.id ? 'active' : null}`}
            onClick={() => {
                setCurrentChat(chat)
                setHidenMenu(true)
            }}
        >
            <img src={chat.avatar} alt='Avatar' />
            {hidenMenu && windowSize && windowSize < 950 ? null : (
                <div className='previewDetails'>
                    <div className='nameAndDate'>
                        <h3>{chat.name}</h3>
                        <p className='msg-date'>
                            {chat.messages.length !== 0 ? chat.messages[chat.messages.length - 1].date : null}
                        </p>
                    </div>
                    <p className='msg-content'>
                        {chat.messages.length !== 0
                            ? shortenText(chat.messages[chat.messages.length - 1].content)
                            : null}
                    </p>
                </div>
            )}
        </article>
    )
}

export default ChatPreview
