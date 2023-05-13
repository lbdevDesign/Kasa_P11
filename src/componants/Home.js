import '../style/Home.css';

import Header from '../componants/Header'
import ResultCard from '../componants/ResultCard'
import Footer from '../componants/Footer'
import Json from '../data/Kasa.json'


function Home() {

    return (
      <div>
  
        <Header />

        <div className='kesa-page-container'>

          <div className='kesa-imgTopHome'>
            <h1 className='kesa-Home-title'>Chez vous, partout et ailleurs</h1>
          </div>

          <div className='kesa-logements-results'>

            {
              Json.map(element => 
                <ResultCard cardTitle={element.title} cardImg={element.cover} />
              )
            }


    </div>

        </div>
  
        <Footer />
  
      </div>
      
      
    );
  }
  
  export default Home;