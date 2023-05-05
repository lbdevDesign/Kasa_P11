import '../style/ResultCard.css'

function ResultCard(props) {

    const cardImg = props.cardImg
    const cardTitle = props.cardTitle

    return (
        <div className='kesa-resultCard'>
            <p className='kesa-resultTitle'>{cardTitle}</p>
            <div className='kesa-cardShadow'></div>
        </div>
    )

}

export default ResultCard;