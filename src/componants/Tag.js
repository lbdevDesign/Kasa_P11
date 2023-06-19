import '../style/Tags.css'

function Tag ({tags}) {

    console.log(tags);

    return (
        <section>
            <ul className="kesa-logement-tagsContainer">
                {tags.map(element => {
                    
                    return (

                        <li className="kesa-logement-tag" key={element}>
                            <p className="kesa-logement-tagtext">{element}</p>
                        </li>

                    )
                    
                })}
            </ul>
        </section> 

    )

}

export default Tag;