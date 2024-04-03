import React from 'react'

const Title = (props) => {

  const {title} = props;

    const css1 = {
        marginTop : '70px',
        textAlign : 'center'
    }

    //변수로 css 속성 객체로 만들고 h3 html요소에 집어
    //넣는 형식이 있고 직접 그냥 입력하는 형식도 있음
    //app.css없어도 이렇게 적용 가능! props로 잘 받아졌는지 항상 콘솔에 찍어보기

  return (
    <>
    <h3 style = {css1}>{title.tit_h3}</h3>
    <p style={{textAlign: 'center'}}>{title.tit_p}</p>

    </>
  )
}

export default Title

//라우터는 전체적인 페이지 파일
//components는 조그만한 요소들 파일
//새 컴포넌트는  rafce