import React from 'react';

function Picture(props){
    
    return(
        <div>
           {(!props.photoUrl) && <h3>Loading...</h3>}
            <img src={props.photoUrl} alt=""/>
        </div>
    )
}

export default Picture;