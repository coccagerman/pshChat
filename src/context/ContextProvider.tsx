import { ReactNode, useState } from 'react'
import Context from './Context'
import avatar1 from './../assets/avatar-1.png'
import avatar2 from './../assets/avatar-2.png'
import avatar3 from './../assets/avatar-3.png'
import { Chat, MockUsers } from '../types/Types'

interface ContextProviderProps {
    children: ReactNode
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [activeChats, setActiveChats] = useState<Chat[]>([
        {
            id: 1,
            name: 'Luciana Gutierrez',
            role: 'HR Manager',
            avatar: avatar2,
            messages: [
                {
                    content: 'Hola Luciana! Tuviste alguna novedad?',
                    received: false,
                    date: '9:45 AM',
                    msgId: 1
                },
                {
                    content: 'Hola John! Todavía no...',
                    received: true,
                    date: '10:19 AM',
                    msgId: 2
                },
                {
                    content: 'Si tengo alguna otra novedad te comento. Gracias!',
                    received: true,
                    date: '10:20 AM',
                    msgId: 3
                }
            ]
        },
        {
            id: 2,
            name: 'Micaela Alvarez',
            role: 'Marketing Manager',
            avatar: avatar1,
            messages: [
                {
                    content: 'Hola John! Entre qué horarios podrías hoy tener la meeting?',
                    received: true,
                    date: '9:45 AM',
                    msgId: 1
                },
                {
                    content: 'Hola Micaela! Muy bien. Yo puedo de 10 a 17 hs.',
                    received: false,
                    date: '10:05 AM',
                    msgId: 2
                },
                {
                    content: 'Dale, agendé la meeting para hoy a las 14hs.',
                    received: true,
                    date: '10:15 AM',
                    msgId: 3
                }
            ]
        },
        {
            id: 3,
            name: 'Manuel Hoffman',
            role: 'Business Manager',
            avatar: avatar3,
            messages: [
                {
                    content: 'Gracias por la reunión de ayer, Manu, fue muy productiva!',
                    received: false,
                    date: '9:35 AM',
                    msgId: 1
                },
                {
                    content: 'Gracias a vos!',
                    received: true,
                    date: '9:37 AM',
                    msgId: 2
                }
            ]
        }
    ])

    const [currentChat, setCurrentChat] = useState<Chat | null>(activeChats[1])

    const [fetchedContactsList, setFetchedContactsList] = useState<MockUsers[]>([])

    return (
        <Context.Provider
            value={{
                activeChats,
                setActiveChats,
                fetchedContactsList,
                setFetchedContactsList,
                currentChat,
                setCurrentChat
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
