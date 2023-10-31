import React from 'react';

const Row = (props) => {
  return (
    <>
        <div className='gameItems' onClick={props.onClick}>
             <h1>{props.value}</h1>
        </div>
    </>
  )
}

export default Row;