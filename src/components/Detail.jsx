import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Button, Nav, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import TabContent from './TabContent';

import styled from 'styled-components';
import {Context1} from '../App';

const Box = styled.div`
padding : 20px;
color: gray;
`

const YellowBtn = styled.button`
color: ${props => props.bg == 'blue' ? 'white' : 'black'};
font-size : 30px;
width: 100%;
padding : 100px;
border : 1px solid #ccc;
bacground-image : url(https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-and-facebook-web-banner-template_70055-855.jpg)
background-size : cover;

`

const Detail = (props) => {

    const {shoes} = props;
    let {id} = useParams();
    const [tab, setTab] = useState(0);
    let selproduct = shoes.find( x => x.id == id)
    const [count, setCount] = useState(0)
    const [alert, setAlert] = useState(true)
    const [fade, setFade] = useState('')
    {/*x는 shoes의 객체들의 정보를 담은것, x 객체 즉, shoes객체들 중 x.id인 것을 의미하는 구문임* x.id는 number이고 id는 string이라서 ===말고 ==를 써야 함*/}
    const { remain } = useContext(Context1);

    useEffect(() => {
      setTimeout(()=>{setFade('end')},50)
      return ()=>{setFade(''); }
    })

    return (

        <Container className={"start" + fade}>

        {
          alert === true ? <Alert variant='warning'> 2초 이내 구매시 할인</Alert> : null
        }


            {/* <Alert key={'warning'} variant={'warning'}>
          This is a {'warning'} 10초이내 구매시 할인
            </Alert> */}

            { remain }

            <Box>
              <YellowBtn bg = 'orange'>지금 구매하면 10% 할인</YellowBtn>
              <YellowBtn bg = 'blue'>지금 구매하면 10% 할인</YellowBtn>
            </Box>


            <Row>

                <Col md={6}>

                    <img src= {selproduct.imgUrl }width="100%" />

                </Col>

                <Col md={6}>

                    <h4 className='pt-5'>{selproduct.title}</h4>

                    <p>{selproduct.content}</p>

                    <p>{selproduct.price}</p>

                    <Button variant='success'>Success</Button>

                </Col>

            </Row>


            <Nav variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link href="/home" onClick={()=>{setTab(0)}}>탭0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>탭1
      
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>탭2</Nav.Link>
      </Nav.Item>
    </Nav>


        {/* <div>내용0</div>
        <div>내용1</div>
        <div>내용2</div> */}

        {       {/*즉시실행 함수*/}
            // (()=> {

            //     if(tab === 0){
            //         return<div>내용0</div>
            //     } else if (tab === 1){
            //         return <div>내용1</div>
            //     }
            // })()

        }

<TabContent tab={tab}></TabContent>
        </Container>

    )

}



export default Detail
