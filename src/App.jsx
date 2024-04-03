import './App.css';

import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './routes/Home';
import data from './data'
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// import {Container, Navebar } from
// import bg from './img/bg.jpg'
import Detail from './components/Detail';

export const Context1 = createContext();

function App() {

  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const [no, setNo] = useState([0,1,2,3,4,5,6,7,8]);
  //상품 9개 순서 기억

  const [remain, setRemain] = useState([10,11,12])
  const fcss = {
    backgroundColor : "#333",
    color : '#fff',
    padding : '20px 0',
    marginTop: '80px',
    marginBottom: 0
  }


  return (



    <div className="App">

      <Navbar bg="dark" variant="dark">

        <Container>

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          	
        <Nav className="me-auto">

        <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>

        <Nav.Link onClick={()=>{ navigate('/detail/0')}}>Detail</Nav.Link>

        <Nav.Link onClick={() => { navigate('/Cart')}}>Cart</Nav.Link> 

        <Nav.Link onClick={() => { navigate('/About')}}>About</Nav.Link> 

        </Nav>


        </Container>

      </Navbar>


      {/* <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link> */}

      <Routes>
        <Route path='/' element={<Home shoes={shoes} setShoes = {setShoes} no={no} setNo = {setNo}/>} />

        <Route path="/detail/:id" element={
      <Context1.Provider vlaue ={{remain}}>
          <Detail shoes={shoes}/>
      </Context1.Provider>
      } />


        <Route path="/cart" element={<div>장바구니</div>} />
        <Route path="/about" element={
        <div>
          <h2>회사소개 페이지</h2>
          <Outlet></Outlet>
        </div>}>
            <Route path = 'member' element = { <div>사원 정보</div>}></Route>
            <Route path = 'location' element = { <div>찾아 오는 길</div>}></Route>

        </Route>
       

        <Route path = '*' element = { <div>404페이지</div>}></Route>


      </Routes>



<p style = {fcss}>copyRight(C) 2024 Nike, Tnc, All rights Reserved</p>


    </div>

  );

}



export default App;
