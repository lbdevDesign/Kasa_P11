import dropdownArrow from '../assets/dropdownArrow.svg'
import '../style/Dropdown.css'

function Dropdown(props) {
    const dropdownTitle = props.dropdownTitle;
    let dropdownContent = props.dropdownContent;
  
    if (Array.isArray(dropdownContent)) {
      dropdownContent = (
        <ul className="dropdown-ul">
          {dropdownContent.map((element) => (
            <li key={element} className='kesa-dropdown-content kesa-dropdown-li'>{element}</li>
          ))}
        </ul>
      );
    }
  
    
  
    return (
      <div className="kesa-dropdown">
        <div className="kesa-dropdown-contentBox">
          <div className="kesa-dropdown-top">
            <p className="kesa-dropdown-title">{dropdownTitle}</p>
            <img
              src={dropdownArrow}
              alt="ouvrir le dropdown"
              className="kesa-dropdown-arrow"
              onClick={hideDropdown}
            />
          </div>
         <h6 className='kesa-dropdown-content'>{dropdownContent}</h6> {/* Modification de cette ligne */}
        </div>
      </div>
    );
  }

  function hideDropdown(e) {
      const arrow = e.target;
      const content = arrow.parentNode.nextSibling;
      console.log(e);
  
      arrow.classList.toggle('arrow-up');
      content.classList.toggle('content-hide');
    }
  
  export default Dropdown;