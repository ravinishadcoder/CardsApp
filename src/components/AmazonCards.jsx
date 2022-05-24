import React from 'react'

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AmazonCards = (props) => {
 
  return (
    <div className='maincont'style={{marginTop:props.margin_top,backgroundColor:props.color,borderRadius:'5px'}}>
        <div className='imgdate'>
          <h3>{props.Date}</h3>
          <img src={props.image} alt="" />
        </div>
        <div>
            <button>Case Study</button>
        </div>
        <h2>{props.fname}</h2>
        <h2>{props.lname}</h2>
        <div className='desnarrow'>
        <h3>{props.sys}</h3>
        <FontAwesomeIcon icon={faArrowRight} style={{position:'relative', top:'25px',right:'25px'}} />
        </div>
    </div>
  )
}

export default AmazonCards