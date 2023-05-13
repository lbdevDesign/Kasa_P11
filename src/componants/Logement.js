import '../style/Logement.css';

import Header from '../componants/Header'
import Dropdown from '../componants/Dropdown'
import Footer from '../componants/Footer'

import ImgLogement from '../assets/imgLogement.png'
import Arrow from '../assets/arrow.svg'
import StarFull from '../assets/starFull.svg'
import StarEmpty from '../assets/starEmpty.svg'

function Logement() {

    return (
        <div>
            <Header />

            <div className='kesa-logement-container'>

                <div className='kesa-logement-visuels'>

                    <img className='kesa-logement-img' alt='Pièce à vivre du logement' src={ImgLogement}/>

                    <img className='kesa-logement-arrowLeft' alt='défiler à gauche' src={Arrow}/>

                    <img className='kesa-logement-arrowRight' alt='défiler à droite' src={Arrow}/>

                    <p className='kesa-logement-imgPos'>1/4</p>

                </div>

                <div className='kesa-logement-infos'>

                    <div className='kesa-logement-infos1'>

                        <h1 className='kesa-logement-title'>Paris center, on the romantic Canal Saint-Martin</h1>

                        <h2 className='kesa-logement-location'>Paris, Île-de-France</h2>

                        <div className='kesa-logement-tagsContainer'>

                            <div className='kesa-logement-tag'>
                                <p className='kesa-logement-tagtext'>Cozy</p>
                            </div>

                            <div className='kesa-logement-tag'>
                                <p className='kesa-logement-tagtext'>Canal</p>
                            </div>

                            <div className='kesa-logement-tag'>
                                <p className='kesa-logement-tagtext'>Paris 10</p>
                            </div>

                        </div>

                    </div>                    

                    <div className='kesa-logement-host'>

                        <div className='kesa-logement-scoreContainer'>

                            <img className='kesa-logement-star' alt='point' src={StarFull}/>

                            <img className='kesa-logement-star' alt='point' src={StarFull}/>

                            <img className='kesa-logement-star' alt='point' src={StarFull}/>

                            <img className='kesa-logement-star' alt='minus' src={StarEmpty}/>

                            <img className='kesa-logement-star' alt='minus' src={StarEmpty}/>

                        </div>

                        <div className='kesa-logement-hostInfos'>

                            <p className='kesa-logement-hostName'>Alexandre <br/>Dumas</p>

                            <div className='kesa-logement-hostImg'></div>

                        </div>
                    </div>
                </div>

                <div className='kesa-logement-details'>

                    <Dropdown className='kesa-dropdown-logement' dropdownTitle='Description' dropdownContent="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "/>

                    <Dropdown className='kesa-dropdown-logement-equipements' dropdownTitle='Équipements' dropdownContent="Climatisation, Wi-Fi Cuisine, Espace de travail, Fer à repasser, Sèche-cheveux, Cintres"/>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Logement;