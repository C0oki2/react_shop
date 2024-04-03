import React from 'react'
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Product = (props) => {

  const {shoes, no, i} =props;
  const navigate = useNavigate();
  let {imgUrl, price, title} = props.shoes;   //비구조할당
 


  return (

    <Col md={4} onClick ={()=> {
      navigate('/detail/' + no[i])
    }}>

      <img src={imgUrl} width="80%" alt='item' />

      <h4>{title}</h4>

      <p>{price}</p>

    </Col>

  )

}



export default Product


