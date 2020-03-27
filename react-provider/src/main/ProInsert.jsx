import React, { Component } from "react";
import MPro from "../provider/MessageProvider";
import ProFunc from "./ProFunc";

class ProInsert extends Component {
  state = {
    message: "나는 Insert 컴포넌트"
  };

  static contextType = MPro;

  // main에서 선언된 state.message 변수를 변경하기 위한
  // 메서드를 선언한다.
  changeMessage = me => {
    this.setState({
      message: me
    });
  };

  // 키보드에서 입력을 하면 입력받은 문자열을
  // this.state.message에 저장해 달라

  // handleChange에서 this.state.message를 변경하면
  // 현재 컴포넌트 어디에 this.state.message가 있던 상관없이
  // 동시에 변경된 값이 표현된다.
  handleChange = ev => {
    this.setState({ message: ev.target.value });
  };

  // Main -> Sub2 -> 나에게 전달된 changeMessage 메서드를
  // 호출하여 지금부터 내가 보내는 문자열을 전체 컴포넌트가
  // 공유하는 message 변수에 적용하라
  messageSend = () => {
    this.context.changeMessage("무엇인가");
  };

  render() {
    const { props } = this;
    const { message } = this.state;
    return (
      <div>
        <h5>입력박스</h5>
        <label>문자열을 입력하세요</label>
        {/**
         * react에서 input box를 사용하려면
         * 1.먼저 value에 포함시킬 state변수를 선언하고
         * 2.value={this.state.변수}라고 작성을 하고
         * 3.onChange 이벤트를 캡쳐하여 키보드에서 입력된 문자열을
         *  this.state.변수에 this.setState()반영을 시켜준다.
         *
         * onChange : value값이 바뀌는 이벤트가 실행되면 {}안의 함수를 실행하라
         */}
        <input value={this.state.message} onChange={this.handleChange} />
        <button onClick={this.state.messageSend}>전달</button>
        <p>{message}</p>
        <h4>함수방식 컴포넌트 가져오기</h4>
        <ProFunc />
      </div>
    );
  }
}

export default ProInsert;
