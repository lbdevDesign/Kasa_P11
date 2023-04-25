import dropdownArrow from '../assets/dropdownArrow.svg'
import '../style/Dropdown.css'

function Dropdown (props) {

    const dropdownTitle = props.dropdownTitle
    const dropdownContent = props.dropdownContent

    return (
        <div className="kesa-dropdown">
            <div className="kesa-dropdown-top">
                <p className="kesa-dropdown-title">{dropdownTitle}</p>
                <img src={dropdownArrow} alt='ouvrir le dropdown' className='kesa-dropdon-arrow'/>
            </div>
            <div className='kesa-dropdown-contentBox'>
                <p className='kesa-dropdown-content'>{dropdownContent}</p>
            </div>
        </div>
    )
}

export default Dropdown;