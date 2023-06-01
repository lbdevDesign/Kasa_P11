import '../style/ResultCard.css'
import {Link} from 'react-router-dom'

function ResultCard(props) {

    const cardImg = props.cardImg
    const cardTitle = props.cardTitle
    const cardId = props.cardId

    return (
        <Link to={`/logement/${cardId}`} className='kesa-resultCard'>
                <p className='kesa-resultTitle'>{cardTitle}</p>
                <div className='kesa-cardShadow'></div>
                <img className='kesa-cardImg' src={cardImg} />
        </Link>
    )

}

export default ResultCard;

// ajouter les liens vers les logements
