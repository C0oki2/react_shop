import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-bootstrap'

const TabContent = (props) => {
    const [Fade, setFade] = useState('')
    const {tab} = props
    const {remain} = useContext(Context1)
    // set [Fade, setFade] = {

    // }

    useEffect(()=>{

    setTimeout(()=>{setFade('end')}, 50)
    return ()=> {
        setFade('');
    } },[tab]) 

    return (

    <div className = {'start'+ Fade}>  { 
        [<div>내용 남은 수량 : {remain[2]}</div>,<div>내용2</div>,<div>내용3</div>]
        [tab]}</div>
  )
}

export default TabContent