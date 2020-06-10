import React from 'react'

function Description(props){
    const {date, explanation, copyright} = props.photoDetails
    return(
        <div>
            <p>{explanation}</p>
            <p>{copyright}</p>
            <p>{date}</p>
        </div>
    )
}


export default Description;