import '../style/Home.css';

import Header from '../componants/Header'
import TopImg from '../componants/TopImg'
import ResultCard from '../componants/ResultCard'
import Footer from '../componants/Footer'
import Json from '../data/Kasa.json'


function Home() {

    return (

      <div>
  
        <Header />

        <TopImg page='home' />

        <div className='kesa-page-container'>

          {/*<div className='kesa-imgTopdiv'>
            <h1 className='kesa-toptitle'>Chez vous, partout et ailleurs</h1>
            <img src='./assets/IMG.png' className='kesa-topimg'/>
          </div>*/}

          <div className='kesa-logements-results'>
            {
              Json.map(element => 
                <ResultCard cardTitle={element.title} cardImg={element.cover} cardId={element.id}/>
              )
            }
          </div>

        </div>
  
        <Footer />
  
      </div>
      
    );
}
  
export default Home;

//je ne comprend pas ce bug