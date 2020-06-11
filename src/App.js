import React, {useState, useEffect} from "react";

import ImageContainer from './components/photo/picture'
import Calendar from './components/calendar/calendar.jsx';
import Descritpion from './components/description/description.jsx'
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
      <Calendar photoTitle={photoOfDay.title} currentDate={photoOfDay.date} setNewDate={setDate}/>
      {/* <Descritpion photoDetails={photoOfDay} /> */}
    </ImageContainer>
  );
}

export default App;
