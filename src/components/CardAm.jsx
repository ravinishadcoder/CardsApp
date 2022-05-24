import React from 'react'
import AmazonCards from './AmazonCards'
import Data from './Data'


const CardAm = () => {
  return (
    <>
    {Data.map(function(ele){
  return(
    <AmazonCards
    key={ele.id}
    color={ele.color}
    Date={ele.Date}
    image={ele.image}
    fname={ele.fname}
    lname={ele.lname}
    sys={ele.sys}
    />
  )
})}
    </>
  )
}

export default CardAm