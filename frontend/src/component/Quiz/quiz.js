
import React, { useEffect, useState } from 'react'
import Questions from './Questions.js'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'


const Quiz = () => {

   const questions=useSelector(state=>state)
   useEffect(()=>{
    console.log(questions);
   })

   
    function onNext(){
        console.log("next");
    }

    function onPrev(){
       console.log("prev");
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questions  />

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button> 
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Quiz