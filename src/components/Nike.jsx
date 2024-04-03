import React from 'react'

import { Col } from 'react-bootstrap'


const Nike = (props) => {

  const { nike } = props

  return (

    <Col md={4}>

      <img src={nike.imgUrl} width='80%' alt='item2'/>

      <h5>{nike.title}</h5>

      <p>{nike.content}</p>

      <p>{nike.price}</p>

    </Col>

  )

}


export default Nike
