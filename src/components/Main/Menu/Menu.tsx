import { useContext, useState } from 'react'
import Context from '../../../context/Context'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../../../customHooks/useWindowSize'
import MenuHeader from './MenuHeader/MenuHeader'
import ChatPreview from './ChatPreview/ChatPreview'
import { Chat, ContextType } from '../../../types/Types'

const Menu: React.FC = () => {
    const { activeChats } = useContext(Context) as ContextType

    const windowSize = useWindowSize()
    const [hidenMenu, setHidenMenu] = useState<boolean>(true)

    return (
        <section className={`menu ${!hidenMenu ? 'menuActive' : null}`}>
            <MenuHeader windowSize={windowSize} hidenMenu={hidenMenu} setHidenMenu={setHidenMenu} />
            <div className='chatPreview-container'>
                {activeChats?.map((chat: Chat) => (
                    <ChatPreview
                        chat={chat}
                        key={chat.id}
                        windowSize={windowSize}
                        hidenMenu={hidenMenu}
                        setHidenMenu={setHidenMenu}
                    />
                ))}
                <Link to='/createNewChat'>
                    <button style={{ paddingBottom: '2rem' }}>
                        <span>+</span>
                        {(windowSize && windowSize > 950) || !hidenMenu ? ' Create New' : null}
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Menu
