
import React, { useEffect, useState } from 'react'
import Questions from './Questions.js'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {MoveNextQuestion,MovePrevQuestion} from "../../actions/productAction.js"

const Quiz = () => {
  const dispatch = useDispatch();
  const {
    questions,
    loading,
    answers,
    trace,
   
  } = useSelector((state) => state.questions);

   
   
    function onNext(){
         if(trace < questions.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

           
        }
    }

    function onPrev(){
      if(trace > 0){
        /** decrease the trace value by one using MovePrevQuestion */
        dispatch(MovePrevQuestion());
    }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questions  />

        <div className='grid'>
        { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Quiz