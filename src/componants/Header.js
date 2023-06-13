import { Link } from 'react-router-dom';
import logoKesa from '../assets/logoKesa.png'
import '../style/Header.css'

function Header() {
    return (
        <div className='kesa-header-container'>
            <div className='kesa-header'>
                <Link to='/'>
                    <img src={logoKesa} alt='Kesa logo' className='kesa-logo' />
                </Link>
                <ul className='kesa-menu'>
                    <Link to='/'>
                        <li className='kesa-menu-element'>
                            <p>Accueil</p>
                        </li>
                    </Link>
                    <Link to='/a-propos'>
                        <li className='kesa-menu-element'>
                            <p>A Propos</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;