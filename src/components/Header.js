import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const header = useRef(); //태그 선택시 참조할 대상 담을 공간
    
    function scrollHeader(){
        let scTop = window.scrollY; //스크롤바 위치값 알아낼때 사용
        if(scTop > 0) { //스크롤바 위치가 0보다 크면 헤더에 클래스 추가
            header.current.classList.add("on");
        }
        else{ //스크롤바의 위치가 0이랑 같으면 헤더의 클래스 제거
            header.current.classList.remove("on");
        }
    }
    /*태그 대상 선택시 해당변수이름이나 상수이름뒤에 .current 를 붙여서 선택 */
  /* 
    헤더에 들어갈 기능은 스크롤 이벤트 -> 스크롤바 위치값 0보다 크면
    헤더의 디자인은 바뀐다.  document.querySelector("#header")  <---- 이거대신 어떻게 쓸지?
    사용방법 ->  const header = useRef(); 
    <div ref={header}></div>  이런식으로 연결함
  */
    useEffect(()=>{
        window.addEventListener("scroll",scrollHeader)
        //이 구간이 태그에 이벤트를 걸거나 클래스를 붙이거나 하는 스크립트 작업구간
    })

  return (
    <> 
    <div id="header" ref={header}>
        <div className="center">
            <h1><Link to="/">로고</Link></h1>
            <ul>
                <li><Link to="/sub">서브페이지1</Link></li>
                <li>서브페이지2</li>
                <li>서브페이지3</li>
                <li>서브페이지4</li>
            </ul>
        </div>
    </div>
    <div id="container">중간영역</div>
    </>
  )
}

export default Header