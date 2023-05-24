import React, { useState,useRef, useEffect } from 'react'

function MainContainer() {
  //왼쪽 사이드메뉴 클릭시 순번값 변경 
  let [sideMenuNumber,sideMenuNumberSet] = useState(0);
  //중간영역들 useRef로 참조
  const conts = useRef([]);
//   console.log(conts.current);
  //왼쪽 메뉴 각각 useRef로 참조
  const sideMenu = useRef([]);
//console.log(sideMenu.current)

  //스크롤시 동작할 코드 -> 함수에 넣어서 작업
  function containerChange(){
     //스크롤바 위치값 받아오기
     let scTop = window.scrollY;
     //반복문으로 밑 if문 4번 실행하게 처리
     for(let i=0; i<conts.current.length; i++){
        // 스크롤바의 위치값이 해당 중간구역의 시작위치범위에 있으면
        if(scTop >= conts.current[i].offsetTop){
            conts.current[i].classList.add("show"); //해당 중간구역 지나가면 클래스 붙여줘
            sideMenuNumberSet(i); //state값 변경 0,1,2,3
        }
     }
  }

  function sideMenuClick(no){
    //  console.log(no);
     //스크롤바 위치값 이동 기능  window.scrollTo({top:중간구역시작위치값,behavior:"smooth"})
     window.scrollTo({top:conts.current[no].offsetTop,behavior:"smooth"});
  }


  //스크립트 이벤트 탑재구간 scroll 같이 window대상에 걸어줘야 하는경우
  //왼쪽 사이드메뉴들을 각각 클릭 시 스크롤바 이동하는 작업
  useEffect(()=>{
    console.log("컴포넌트 추가");
    window.addEventListener("scroll",containerChange);
    for(let i=0; i<sideMenu.current.length; i++){
        sideMenu.current[i].addEventListener("click",function(){
            sideMenuClick(i);
            //함수 호출시 전달할 데이터값이 있으면 function 키워드를 이용해 
            //우리가 만든 함수를 호출한다.
            //그게 아니라면 function(){}대신 우리가 만든 함수명으로 대체해서 사용가능
        })
    }
    //내가코드 실행할거 까지 적어놓고 이 컴포넌트가 사라질 때 실행될 코드 출력
    //컴포넌트가 교체가 되도 이벤트 걸어놓은거는 사라지지 않은 상태
    return()=>{
        console.log("컴포넌트 제거");
        //이벤트를 제거시키고 교체를 해야된다는 뜻
        window.removeEventListener("scroll",containerChange);
    }

  })

  return (
    <>
    <div id="container">
        <div className='conts cont1' ref={(el)=>{ conts.current[0] = el}}>
            <h2>중간영역 첫번째 구역 등장 텍스트</h2>
        </div>
        <div className='conts cont2' ref={(el)=>{ conts.current[1] = el}}>
            <div>중간영역 두번째 박스1</div>
            <div>중간영역 두번째 박스2</div>
            <div>중간영역 두번째 박스3</div>
        </div>
        <div className='conts cont3' ref={(el)=>{ conts.current[2] = el}}>
            <div>중간영역 세번째 박스1</div>
            <div>중간영역 세번째 박스2</div>
            <div>중간영역 세번째 박스3</div>
            <div>중간영역 세번째 박스4</div>
        </div>
        <div className='conts cont4' ref={(el)=>{ conts.current[3] = el}}>
            <h2>중간영역 네번째 구역 등장 텍스트</h2>
        </div>
    </div>
    <div id="leftSide">
        <ul>
            { /* ref 참조할 때 배열형태로 선택할 때는 el이라는 매개변수 이름을 설정하고
                 그 매개변수의 역할은 참조하고있는 li태그  자기 자신을 가리킴*/}
            <li className={(sideMenuNumber === 0) ? "on":""} onClick={(e)=>{e.preventDefault();}} ref={(el)=>{ sideMenu.current[0] = el}}><a href="#">사이드메뉴1</a></li>
            <li className={(sideMenuNumber === 1) ? "on":""} onClick={(e)=>{e.preventDefault();}} ref={(el)=>{ sideMenu.current[1] = el}}><a href="#">사이드메뉴2</a></li>
            <li className={(sideMenuNumber === 2) ? "on":""} onClick={(e)=>{e.preventDefault();}} ref={(el)=>{ sideMenu.current[2] = el}}><a href="#">사이드메뉴3</a></li>
            <li className={(sideMenuNumber === 3) ? "on":""} onClick={(e)=>{e.preventDefault();}} ref={(el)=>{ sideMenu.current[3] = el}}><a href="#">사이드메뉴4</a></li>
        </ul>
    </div>
    </>
  )
}

export default MainContainer