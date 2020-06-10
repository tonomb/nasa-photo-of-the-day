import React from 'react'

function Description(props){
    const {explanation, copyright} = props.photoDetails
    return(
        <div>
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>
    )
}


export default Description;