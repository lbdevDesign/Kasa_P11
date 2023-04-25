import logoKesa from '../assets/logoKesa.png'
import '../style/Header.css'

function Header() {
    return (
        <div className='kesa-header-container'>
            <div className='kesa-header'>
                <img src={logoKesa} alt='Kesa logo' className='kesa-logo' />
                <ul className='kesa-menu'>
                    <li className='kesa-menu-element'>
                        <p>Accueil</p>
                    </li>
                    <li className='kesa-menu-element'>
                        <p>A Propos</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;