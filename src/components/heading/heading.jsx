import React, {useState} from 'react';
import './heading.css'

function Heading(props){

    const { setNewDate } = props;

    const [inputDate, setInputDate] = useState('')

    function handleDateChange(event){

        event.preventDefault()
        setNewDate(inputDate);
    }

    function handleInput(event){
        setInputDate(event.target.value);
    }


    return (
        <div>
            <h1>{props.photoTitle}</h1>
            <form action="" onSubmit={handleDateChange}>
                <input 
                className='date-input'
                type="text" 
                placeholder={props.currentDate}
                onChange={handleInput}/>
            </form>
        </div>
    );
}

export default Heading;