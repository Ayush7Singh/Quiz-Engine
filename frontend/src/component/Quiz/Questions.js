import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from "../data.js";
import { useAlert } from 'react-alert';
import {getQuestions} from "../../actions/productAction.js"

const Questions = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const [checked, setChecked] = useState(undefined);

    const {
        questions,
        loading,
        answers,
        trace,
       
      } = useSelector((state) => state.questions);
    const ques=questions[trace];

    function onSelect(i){
        
        setChecked(i)
       
    }
    useEffect(() => {
        
    
        dispatch(getQuestions());
      }, [dispatch]);
    
    
  return (
    <div className='questions'>
    <h2 className='text-light'>{ques?.question}</h2>

    <ul key={ques?.id}>
        {
            ques?.options.map((q, i) => (
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