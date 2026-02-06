import React from 'react'
import './Card.css';


const Carddesc = (props) => {
  return (
    <div className='cardd'>
     
<div className='desc'>
   
<h2>{props.name}</h2>

<p className='hhh'>{props.bata}</p>
<p className='ppp'>
  {props.metugo} <br/>
  {props.one} <br/>
  {props.two} <br/>
  {props.tre}
</p>
</div>
  
    </div>

    
  )
}

export default Carddesc
