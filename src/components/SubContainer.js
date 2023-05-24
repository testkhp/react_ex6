import React from 'react'

function SubContainer() {
  return (
    <div id="container">
        <h2 className="test1">여기는 서브페이지 1번의 중간영역입니다.
            컴포넌트가 교체될 때 기존의 이벤트를 제거하지 않으면
            리액트에서는 에러로 간주합니다.
            컴포넌트가 바뀔 때 예를들어 메인에서 작업했던 대상들은
            서브컴포넌트에는 존재하지 않기 때문에 이벤트 동작시 오류가 발생합니다.
        </h2>
    </div>
  )
}

export default SubContainer