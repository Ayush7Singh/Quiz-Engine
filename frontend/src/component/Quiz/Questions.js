import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from "../data.js";
const Questions = () => {
    const [checked, setChecked] = useState(undefined)
const questions=data[0];
    function onSelect(i){
        
        setChecked(i)
       
    }
    
  return (
    <div className='questions'>
    <h2 className='text-light'>{questions?.question}</h2>

    <ul key={questions?.id}>
        {
            questions?.options.map((q, i) => (
                <li key={i}>
                    <input 
                        type="radio"
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                    />

                    <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                    
                </li>
            ))
        }
    </ul>
</div>
  )
}

export default Questions