import React, {useState, useEffect} from "react";
import styled from 'styled-components';

import ImageContainer from './components/picture'
import Calendar from './components/calendar.jsx';
import Title from './components/title'
import Descritpion from './components/description.jsx'
import axios from "axios";
import { API_KEY, BASE_URL } from './constants/';



const Button = styled.button`
    position:absolute;
    bottom: 60px;
    right: 60px;
`

function App() {

  const [photoOfDay, setPhotoOfDay] = useState([]);
  const [date, setDate] = useState()
  const [contentDisplay, setContentDisplay] = useState(true)
 
  console.log(contentDisplay);
  
  useEffect(()=>{

    if(date){
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}&date=${date}`)
      .then( res => {
        setPhotoOfDay(res.data)
      })
      .catch(err =>{
        console.log(err);
        
      })

    } else {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then( res => {
        setPhotoOfDay(res.data)
      })
      .catch(err =>{
        console.log(err);
        
      })
    }

    
  },[date])

  function enableFullScreen(){
    setContentDisplay(!contentDisplay)
  }

  
  return (
    <ImageContainer source={photoOfDay.hdurl}>
      <Calendar currentDate={photoOfDay.date} setNewDate={setDate} displayState={contentDisplay}/>
      <Title photoTitle={photoOfDay.title} displayState={contentDisplay}></Title>
      <Descritpion photoDetails={photoOfDay} displayState={contentDisplay} />
      <Button onClick={enableFullScreen}>{contentDisplay ? 'Full Screen' : 'Show Content'}</Button>
    </ImageContainer>
  );
}

export default App;
