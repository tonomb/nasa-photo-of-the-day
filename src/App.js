import React, {useState, useEffect} from "react";
import "./App.css";

import Heading from './components/heading/heading.jsx';
import Picture from './components/photo/picture.jsx';
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
    <div className="App">
      <Heading photoTitle={photoOfDay.title} currentDate={photoOfDay.date} setNewDate={setDate}/>
      <Picture photoUrl={photoOfDay.hdurl}/>
      <Descritpion photoDetails={photoOfDay} />
    </div>
  );
}

export default App;
