// 지금부터 이 문서는 React의 Component이다.
import React, { Component } from "react";
import RCC_SUB from "./RCC_SUB";
import "./RCC.css";
/*
    Es6의 class 문법으로 컴퍼넌트 생성
    보통 jsx(js) 파일의 형식으로 저장
    가급적 파일의 첫 글자, 클래스의 첫 글자는 대문자로 하고
    파일이름과 클래스이름을 일치
    모든 따옴표는 큰따옴표로 통일
    클래스는 1개의 파일에 1개만 작성
 */
class RCC extends Component {
  render() {
    return (
      <div>
        <div className="myDiv">나는 첫번째 RCC 컴퍼넌트</div>
        <RCC_SUB name="졸려" />
      </div>
    );
  }
}

// 이 컴퍼턴트를 외부에서 사용할 수 있도록 선언
// export defaul는 한 파일에 한개만 있을 수 있다.
export default RCC;
