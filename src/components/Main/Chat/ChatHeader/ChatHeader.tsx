import Context from '../../../../context/Context'
import { useContext } from 'react'
import { ContextType } from '../../../../types/Types'

const ChatHeader = () => {
    const { currentChat } = useContext(Context) as ContextType

    return (
        <header className='chatHeader'>
            <img src={currentChat?.avatar} alt='Avatar' />
            <div className='personDetails'>
                <h1>{currentChat?.name}</h1>
                <p>{currentChat?.role}</p>
            </div>
        </header>
    )
}

export default ChatHeader
