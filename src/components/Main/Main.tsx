import React from 'react'
import Chat from './Chat/Chat'
import Menu from './Menu/Menu'

const Main: React.FC = () => {
    return (
        <section className='main'>
            <Menu />
            <Chat />
        </section>
    )
}

export default Main
