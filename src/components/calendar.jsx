import React, {useState} from 'react';
import styled from 'styled-components'


const StyledDiv = styled.div`
    width: 260px;
    background-color: white;
    opacity: 0.6;
    border-radius: 20px;
    display: ${props => props.displayState  ?'block' : 'none'};
`

const StyledInput = styled.input`
    font-size: 4rem;
    text-align: center;
    border: none;
    color: darkslategray;
    padding: 16px;
    outline: none;
    opacity: 1;
`


function Calendar(props){

    const { setNewDate, displayState } = props;

    const [inputDate, setInputDate] = useState('')

    function handleDateChange(event){
        event.preventDefault()
        setNewDate(inputDate);
    }

    function handleInput(event){
        setInputDate(event.target.value);
    }


    return (
        <StyledDiv displayState={displayState}>
            <form styles={{opacity: '1'}} action="" onSubmit={handleDateChange}>
                <StyledInput 
                className='date-input'
                type="text" 
                placeholder={props.currentDate}
                onChange={handleInput}/>
            </form>
        </StyledDiv>
    );
}

export default Calendar;