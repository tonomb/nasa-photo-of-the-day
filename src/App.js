import React, {useState, useEffect} from "react";

import ImageContainer from './components/picture'
import Calendar from './components/calendar.jsx';
import Title from './components/title'
import Descritpion from './components/description.jsx'
import axios from "axios";
import { API_KEY, BASE_URL } from './constants/';

function App() {

  const [photoOfDay, setPhotoOfDay] = useState([]);
  const [date, setDate] = useState()
 
  console.log(date);
  
  useEffect(()=>{

    if(date){
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}&date=${date}`)
      .then( res => {
        setPhotoOfDay(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err);
        
      })

    } else {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then( res => {
        setPhotoOfDay(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err);
        
      })
    }

    
  },[date])


  
  return (
    <ImageContainer source={photoOfDay.hdurl}>
      <Calendar currentDate={photoOfDay.date} setNewDate={setDate}/>
      <Title photoTitle={photoOfDay.title}></Title>
      {/* <Descritpion photoDetails={photoOfDay} /> */}
    </ImageContainer>
  );
}

export default App;
