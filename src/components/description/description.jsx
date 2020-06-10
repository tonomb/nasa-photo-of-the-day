import React from 'react'
import './description.css'

function Description(props){
    const {explanation, copyright} = props.photoDetails
    return(
        <div className='description'>
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>
    )
}


export default Description;