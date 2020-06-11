import React from 'react';
import './picture.css'

function Picture(props){
    
    return(
        <div>
           {(!props.photoUrl) && <h3>Loading...</h3>}
            <img className="picture" src={props.photoUrl} alt=""/>
        </div>
    )
}

export default Picture;