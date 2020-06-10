import React from 'react';
import axios from 'axios';


function Picture(props){
    
    return(
        <div>
            <img src={props.photoUrl} alt=""/>
        </div>
    )
}

export default Picture;