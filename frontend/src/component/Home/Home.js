import React, { Fragment,useEffect, useRef } from 'react'

import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from 'react-router-dom';


const Home = () => {
  const inputRef = useRef(null)
  
  const dispatch = useDispatch();
  const { loading, error, products} = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
    <Fragment>
<MetaData title="ECOMMERCE" />

        <div className="banner">
          
            <h1>Quiz Application</h1>
            <ol>
            <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>
        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        
            
              <button>
              <Link className='btn' to={'quiz'}>Start Quiz</Link>
              </button>
           
          </div>
          
    </Fragment>
     )}
     </Fragment>
  )
}

export default Home