import '../style/Logement.css';

import Header from '../componants/Header'
import Dropdown from '../componants/Dropdown'
import Footer from '../componants/Footer'
import PageNotFound from './PageNotFound';

import ImgLogement from '../assets/imgLogement.png'
import Arrow from '../assets/arrow.svg'
import StarFull from '../assets/starFull.svg'
import StarEmpty from '../assets/starEmpty.svg'
import Json from '../data/Kasa.json';
import { useParams } from 'react-router-dom';

function Logement() {

    let {id} = useParams(); // je récupère tout ce qu'il y a dans l'url
    const logementJson = Json.filter(log => log.id === id)// je cherche dans le json et je ne veux que le logement qui est égal à l'id de l'url (fonction filter)
    const logement = (logementJson.length > 0) ? logementJson[0] : null
    console.log(logement);

    if (logement === null) {
        return <PageNotFound />
    }

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

                        <h1 className='kesa-logement-title'>{logement.title}</h1>

                        <h2 className='kesa-logement-location'>{logement.location}</h2>

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

                            <p className='kesa-logement-hostName'>{logement.host.name}</p>

                            <img className='kesa-logement-hostImg' src={logement.host.picture}/>

                        </div>
                    </div>
                </div>

                <div className='kesa-logement-details'>

                    <Dropdown className='kesa-dropdown-logement' dropdownTitle='Description' dropdownContent={logement.description}/>

                    <Dropdown className='kesa-dropdown-logement-equipements' dropdownTitle='Équipements' dropdownContent={logement.equipments}/>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Logement;

