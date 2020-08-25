import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Advice.css'

function Advice() {

const [advice,setAdvice]=useState("");
const getAdvice=async ()=>{

    await axios.get('https://api.adviceslip.com/advice')
    .then(function (response) {
      // handle success
      setAdvice(response.data.slip.advice);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

useEffect(() => {
  getAdvice();
}, [])

    return (
        <div className="advice">
            <p>
              {advice == ""?
                "Loading..."
                :
                advice
              }
            </p>
            <button onClick={()=>{getAdvice()}} 
             disabled = {advice == "" ? true : false}
            >Get Advice</button>
        </div>
    )
}

export default Advice
