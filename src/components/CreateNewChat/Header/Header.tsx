import { Icon } from '@iconify/react'
import arrowRight from '@iconify-icons/akar-icons/arrow-right'
import { Link } from 'react-router-dom'
import logo from '../../../assets/psh_brand.png'

const Header = () => {
    return (
        <header className='header-newChat'>
            <div className='logoAndArrow-container'>
                <Link to='/'>
                    <Icon icon={arrowRight} hFlip={true} className='arrow-icon' />
                </Link>
                <img src={logo} alt='Logo' />
            </div>
        </header>
    )
}

export default Header
