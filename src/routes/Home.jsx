import React, { useState } from 'react';

import { Container, Row, Button } from 'react-bootstrap';

import Product from '../components/Product';

import Title from '../components/Title';

import data2 from '../data2'; 

import Nike from '../components/Nike';

import axios from 'axios';





const Home = (props) => {

  let { shoes, setShoes, no, setNo} = props; 
  const title = [{tit_h3:`Md's Pick`},{ tit_p :`시선을 사로 잡는 스타일링, 제품들을 만나 보세요.`}, {tit_h3 : `여름을 위한 컬렉션`}, {tit_p : `가깝게, 시원하게 썸머 컬렉션으로 여름을 준비해 보세요`}]
  {/*h3과 p두개 있어서 {}가 두개 있는 거임 */}  
  let [nike, setNike] = useState(data2);
  let [count,setCount] = useState(1)


  return (

    <>

      <div className='slider'></div>

      {/*홈 의 슬라이더 안에 타이틀 넣으려고 이 사이에 넣음*/}

      <Title title = {title[0]}/>

      {/*section 1  {' ' } <- 한칸씩 뛰겠다는 의미*/}

      <Button variant='outline-primary' onClick={()=>{

        {/*문자만 있으면 sort하면 알파벳 정렬, 그런데 [] 배열 안에 개체 object를 정렬하려면 a.value, b.value 이런 식으로...비교해서 정렬함*/}

        let copy=[...shoes].sort((a,b)=>
        
        (a.title > b.title) ? 1 : -1)

      {/*재배열된 copy를 다시 넣으려면 setshoes(copy) 해야 함*/}


        setShoes(copy);
        let no_copy=[];

        for(let i in copy){
          no_copy.push(copy[i].id);
        }

        setNo(no_copy);
        console.log(copy, no_copy);
        }}>이름순 정렬</Button>{' '}



        <Button variant='outline-secondary' onClick={()=>{

{/*let은 블록스코프라 위의 let과 중복되지 않음 copy 변수가*/}
        let copy=[...shoes].sort((a,b)=> (a.price > b.price) ? 1 : -1);


        setShoes(copy);


        let no_copy=[];

        for(let i in copy){

          no_copy.push(copy[i].id);

        }

        setNo(no_copy);

        }}>낮은가격순 정렬</Button>{' '}

        <Button variant='outline-success' onClick={()=>{

        let copy=[...shoes].sort((a,b)=> (a.price < b.price) ? 1 : -1);

        setShoes(copy);

        let no_copy=[];

        for(let i in copy){

          no_copy.push(copy[i].id)

        }

        setNo(no_copy);

        }}>높은가격순 정렬</Button>

      <Container>

        <Row>

          {

            shoes.map((shoe, i) =>

              <Product shoes={shoes[i]} key={i} no = {no}/>

            )

          }

        </Row>

      </Container>


      {/*section2*/}
      <Title title = {title[1]}/>
      <Button variant='outline-secondary' onClick = {
        ()=> { 

          if( count === 1) {
            axios.get('https://c0oki2.github.io/react_data/nike2.json')
            .then((result) => {
              console.log();
              let copy = [...nike, ...result.data]
              setNike(copy)
              setCount(2)

            })
          }else if (count === 2 ) {

            axios.get('https://c0oki2.github.io/react_data/nike3.json')
            .then((result) => {
              console.log();
              let copy = [...nike, ...result.data]
              setNike(copy)
              setCount(3)

            })

          } else {

            alert("더이상 상품이 없습니다")

          }
        }}>+3개 상품 더보기</Button>


      {/**/}
      

      <Container style={{marginTop:'30px'}}>
        <Row>

          {nike.map((value, i) => 
            <Nike nike={value} key={i} />
          )}

        </Row>
      </Container>


    </>

  )

}



export default Home
