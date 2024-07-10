import Context from '../../../../context/Context'
import { useState, useContext } from 'react'
import { ContextType } from '../../../../types/Types'

interface InputProps {
    fixedScroll: React.RefObject<HTMLSpanElement>
}

const Input: React.FC<InputProps> = ({ fixedScroll }) => {
    const { currentChat, setActiveChats, activeChats } = useContext(Context) as ContextType

    const [formValue, setFormValue] = useState('')

    const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const newMsg = {
            content: formValue,
            date: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            received: false,
            msgId: currentChat?.messages?.length ? currentChat?.messages?.length + 1 : 1
        }

        setActiveChats(prevState => {
            const index = prevState.indexOf(activeChats.filter(chat => chat.id === currentChat?.id)[0])
            const item = prevState[index]

            return [
                ...prevState.slice(0, index),
                { ...item, messages: [...item.messages, newMsg] },
                ...prevState.slice(index + 1)
            ]
        })

        setFormValue('')
        setTimeout(() => fixedScroll?.current?.scrollIntoView({ behavior: 'smooth' }), 0.1)
    }

    return (
        <form className='input'>
            <input value={formValue} onChange={e => setFormValue(e.target.value)} placeholder='Type your message...' />
            <button onClick={e => sendMessage(e)} disabled={formValue.length === 0}>
                SEND
            </button>
        </form>
    )
}

export default Input
