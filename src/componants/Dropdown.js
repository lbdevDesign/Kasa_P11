import dropdownArrow from '../assets/dropdownArrow.svg'
import '../style/Dropdown.css'

function Dropdown (props) {

    const dropdownTitle = props.dropdownTitle
    let dropdownContent = props.dropdownContent

    if (Array.isArray(dropdownContent)) {
        dropdownContent = <ul> {dropdownContent.map(element => <li>{element}</li>)} </ul>
    }

    function hideDropdown(e) {

        const arrow = e.target
        const content = arrow.parentNode.nextSibling
        console.log(e);

            arrow.classList.toggle('arrow-up');
            content.classList.toggle('content-hide');

    };

    return (
        <div className="kesa-dropdown">    
            <div className='kesa-dropdown-contentBox'>
                <div className="kesa-dropdown-top">
                    <p className="kesa-dropdown-title">{dropdownTitle}</p>
                    <img src={dropdownArrow} alt='ouvrir le dropdown' className='kesa-dropdown-arrow' onClick={hideDropdown}/>
                </div>
                <p className='kesa-dropdown-content'>{dropdownContent}</p> 
            </div>
        </div>
    )
}

export default Dropdown;


// ajouter la fonction de retour à la ligne lorsqu'il s'agit d'un tableau (if ternaire tableau)

// enlever les petits points