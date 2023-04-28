import dropdownArrow from '../assets/dropdownArrow.svg'
import '../style/Dropdown.css'

function Dropdown (props) {

    const dropdownTitle = props.dropdownTitle
    const dropdownContent = props.dropdownContent

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
