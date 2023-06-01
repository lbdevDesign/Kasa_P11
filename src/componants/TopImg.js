import '../style/TopImg.css'

import bannerHome from '../assets/IMG.png'
import bannerAbout from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'


function TopImg (props) {

    if (props.page === 'home') {
        return (
            <section className='banner-container'>
                <div className='banner-content'>
                    <img src={bannerHome} className='banner-img' alt='Côtes mer' title='Chez vous, partout et ailleurs' />
                </div>
                <div className='banner-content'>
                    <p className='banner-title'>Chez vous, partout et ailleurs</p>
                </div>
            </section>
        )
    } else if (props.page === 'about') {
        return (
            <section className='banner-container'>
                <div className='banner-content'>
                    <img src={bannerAbout} className='banner-img' alt='Bannière page about' title='Montagnes' />
                </div>
            </section>
        ) 
    };

}

export default TopImg;


