import React from 'react'
import AmazonCards from './AmazonCards'
import Data from './Data'


const CardApp = () => {
  return (
    <>
    {Data.map(function(data){
  return(
    <AmazonCards
    key={data.id}
    color={data.color}
    Date={data.Date}
    image={data.image}
    fname={data.fname}
    lname={data.lname}
    sys={data.sys}
    />
  )
})}
    </>
  )
}

export default CardApp