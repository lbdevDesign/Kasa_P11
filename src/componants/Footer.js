import LogoFooter from '../assets/logoKesaMono.png'
import '../style/Footer.css'

function Footer() {
    return (
        <div className="kesa-footer-container">
            <img src={LogoFooter} alt="logo Kesa" className='kesa-logo-footer'/>
            <p className='kesa-copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    )

}

export default Footer;