import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';
import ResultTable from './ResultTable.js';

const Result = () => {
    function onRestart(){
        console.log(0);
    }
  return (
    <div className='container'>
    <h1 className='title text-light'>Quiz Application</h1>

    <div className='result flex-center'>
        <div className='flex'>
            <span>Username</span>
            <span className='bold'>{ ""}</span>
        </div>
        <div className='flex'>
            <span>Total Quiz Points : </span>
            <span className='bold'>{ 0}</span>
        </div>
        <div className='flex'>
            <span>Total Questions : </span>
            <span className='bold'>{  0}</span>
        </div>
        <div className='flex'>
            <span>Total Attempts : </span>
            <span className='bold'>{ 0}</span>
        </div>
        <div className='flex'>
            <span>Total Earn Points : </span>
            <span className='bold'>{ 0}</span>
        </div>
     
    </div>

    <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
    </div>

    <div className="container">
        {/* result table */}
        <ResultTable></ResultTable>
    </div>
</div>
  )
}

export default Result;