import React, {useState, useEffect} from "react";
import "./App.css";

import Heading from './components/heading/heading.jsx';
import Picture from './components/photo/picture.jsx';
import Descritpion from './components/description/description.jsx'
import axios from "axios";
import { API_KEY } from './constants/';

function App() {

  const [photoOfDay, setPhotoOfDay] = useState([]);

  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then( res => {
        setPhotoOfDay(res.data)
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err);
        
      })
  },[])


  return (
    <div className="App">
      <Heading photoTitle={photoOfDay.title}/>
      <Picture photoUrl={photoOfDay.hdurl}/>
      <Descritpion photoDetails={photoOfDay} />
    </div>
  );
}

export default App;
