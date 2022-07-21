import React, { useState } from 'react';
import './Swap.css';
import { AiOutlineArrowDown, AiOutlineDown } from 'react-icons/ai';

function Swap() {

  const [token0In, setToken0In] = useState(true);

  function toggleTokenSwitch() {
    setToken0In(prev => !prev);
  }


  return (
    <div className='swap__container'>
      <h3>Swap</h3>
      <div className='swap__innerContainer'>
        <button className='swap__arrowBtn' onClick={toggleTokenSwitch}><AiOutlineArrowDown/></button>
        {
          token0In ?
        <>
          <div className='swap__tokenContainer'>
            <input 
              type='number'
              placeholder='0.0'
            />
            <button className='swap__tokenBtn'>Token 0</button>
          </div>
          <div className='swap__tokenContainer'>
            <input 
              type='number'
              placeholder='0.0'
            />
            <button className='swap__tokenBtn'>Token 1</button>
          </div>
        </>
        :
        <>
          <div className='swap__tokenContainer'>
            <input 
              type='number'
              placeholder='0.0'
            />
            <button className='swap__tokenBtn'>Token 1</button>
          </div>
          <div className='swap__tokenContainer'>
            <input 
              type='number'
              placeholder='0.0'
            />
            <button className='swap__tokenBtn'>Token 0</button>
          </div>
        </>


        }

      </div>


    </div>
  )
}

export default Swap;