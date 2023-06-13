import '../style/PageNotFound.css';

import Header from '../componants/Header'
import Footer from '../componants/Footer'
import { Link } from 'react-router-dom';

import Img404 from '../assets/404.png'


function PageNotFound() {

    return (
        <div>
            <Header />

            <div className='kesa-noResult-container'>
                <img src={Img404} className='kesa-404img'/>
                <p className='kesa-404Text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/' className='kesa-404cta'>Retourner sur la page d’accueil</Link>
            </div>

            <Footer />
        </div>
    )

}

export default PageNotFound;