import React, {useState} from 'react';
import axios from 'axios';


function Picture(){
    // const [image, setImage] = useState('');

    // axios.get('https://source.unsplash.com/random/800x600')
    //     .then( res => {
    //         debugger
    //     })
    //     .catch( err =>{
    //         debugger
    //     })

    return(
        <div>
            <img src="https://source.unsplash.com/random/800x600" alt=""/>
        </div>
    )
}

export default Picture;