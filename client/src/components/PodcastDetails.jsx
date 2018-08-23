import React from 'react';

//Render reviews for a specific podcast based on podcast id
export default (props, podcast) => {
    return (
        <div className="container-grid aside-1 podcastDetails">
            <h3 className="heading-3">Podcast Details<br /></h3>

            <img src={props.podcast[0].poster_url} alt="Podcast Poster"/>
            <br/>
            <button onClick={(e) => props.edit(props.podcast[0].id)}>Edit</button>
            <li>{props.podcast[0].title}</li> 
            <li>{props.podcast[0].description}</li>
        </div>
    )
}


