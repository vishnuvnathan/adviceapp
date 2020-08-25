import React,{useState} from 'react';
import axios from 'axios';
import './Advice.css'

function Advice() {

const [advice,setAdvice]=useState("")
const getAdvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then(function (response) {
      // handle success
      console.log(response.data.slip.advice);
      setAdvice(response.data.slip.advice)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

    return (
        <div className="advice">
            <p>{advice}</p>
            <button onClick={()=>{getAdvice()}}>Get Advice</button>
        </div>
    )
}

export default Advice
