import '../style/Tags.css'

function Tag ({tags}) {

    console.log(tags);

    return (
        <ul className="kesa-logement-tagsContainer">
            {tags.map(element => {
                
                return (

                    <li className="kesa-logement-tag">
                        <p className="kesa-logement-tagtext">{element}</p>
                    </li>

                )
                
            })}
        </ul>
    )

}

export default Tag;