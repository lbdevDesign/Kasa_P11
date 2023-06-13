
import StarFull from '../assets/starFull.svg'
import '../style/RatingStars.css'

    const RatingStars = ({ rating }) => {
        const starsArray = []
        const starMax = 5
        for (let i = 0; i < starMax; i++) {
        starsArray.push(
            <img
            key={`star ${i}`}
            src={StarFull}
            className={i < rating ? 'stars_active' : 'stars_inactive'}
            alt = 'rating'
            />
        )
        }
    
    return <>{starsArray}</>
    }


export default RatingStars;