import React from 'react'
import { Icon } from '@iconify/react'
import arrowRight from '@iconify-icons/akar-icons/arrow-right'
import logo from '../../../../assets/psh_brand.png'

interface MenuHeaderProps {
    windowSize: number | undefined
    setHidenMenu: React.Dispatch<React.SetStateAction<boolean>>
    hidenMenu: boolean
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ windowSize, setHidenMenu, hidenMenu }) => {
    return (
        <header className={!hidenMenu ? 'menuHeader menuHeaderOpen' : 'menuHeader'}>
            {windowSize && windowSize > 950 ? (
                <>
                    <img src={logo} alt='Logo' />
                    <h1>React Chat</h1>
                </>
            ) : (
                <Icon
                    icon={arrowRight}
                    hFlip={!hidenMenu}
                    className={hidenMenu ? 'icon' : 'icon iconMenuOpen'}
                    onClick={() => setHidenMenu(!hidenMenu)}
                />
            )}
        </header>
    )
}

export default MenuHeader
