/* eslint-disable jsx-a11y/img-redundant-alt */
import '../style/About.css';

import Header from '../componants/Header'
import TopImg from '../componants/TopImg'
import Dropdown from '../componants/Dropdown'
import Footer from '../componants/Footer'

function About() {
  return (
    <div>

      <Header />

      <div className='kesa-page-container'>

        <TopImg page='about' />

        <div className='kesa-dropdown-container'>

          <Dropdown dropdownTitle='Fiabilité' dropdownContent='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>

          <Dropdown dropdownTitle='Respect' dropdownContent='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>

          <Dropdown dropdownTitle='Service' dropdownContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>

          <Dropdown dropdownTitle='Sécurité' dropdownContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>

        </div>

      </div>

      <Footer />

    </div>
    
    
  );
}

export default About;
