import '../style/Home.css';

import Header from './Header'
import ResultCard from './ResultCard'
import Footer from './Footer'

import ImgTop from '../assets/IMG.png'

function Home() {

    return (
      <div>
  
        <Header />

        <div className='kesa-page-container'>

          <div className='kesa-imgTopHome'>
            <h1 className='kesa-Home-title'>Chez vous, partout et ailleurs</h1>
            {/*<img src={ImgTop} alt='Image de bord de mer' className='kesa-imgTop-Home'/>*/}
          </div>

          <div className='kesa-logements-results'>
            <ResultCard cardTitle='Titre de la location' />
            <ResultCard cardTitle='Titre de la location' />
            <ResultCard cardTitle='Titre de la location' />
            <ResultCard cardTitle='Titre de la location' />
            <ResultCard cardTitle='Titre de la location' />
            <ResultCard cardTitle='Titre de la location' />

    </div>

        </div>
  
        <Footer />
  
      </div>
      
      
    );
  }
  
  export default Home;