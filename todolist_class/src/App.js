import React, { Component } from "react";

// 임의로 작성된 컴퍼넌트 파일(*.jsx, *.js)을 사용하기 위해
// 먼저 import를 수행한다.

// main폴더에 잇는 TodoMain.jsx 파일을
// TodoMain이라는 이름으로 사용하겠다.

// 이렇게 선언을 하면 render() 함수 내에서
// 일반 tag와 같은 방식으로 사용할 수 있다.
import TodoMain from "./main/TodoMain";

/**
 * 클래스 type 컴퍼넌트
 * class 키워드로 시작되고
 * 반드시 Component를 extends(상속)하여 준비
 */
class App extends Component {
  id = 5;
  state = {
    input: "",
    todoList: [
      { id: 0, text: "오늘 마감할 일", checked: true },
      { id: 1, text: "공모전 서류 제출", checked: true },
      { id: 2, text: "리엑트 폼 작성", checked: false },
      { id: 3, text: "스프링 시큐리티", checked: false },
      { id: 4, text: "Naver RestTemplete", checked: false }
    ]
  };

  /**
   * TodoForm input box에 value={input}과 같은 형태가 되고
   * {input}은 props 상태로 컴퍼넌트에 전달되어 readOnley 상태가 된다.
   * 그래서 input box에 onChange 이벤트를 설정하여
   * 키보드에서 입력된 글자를 {input}에 강제로 붙여주는 일을 수행해야 한다.
   *
   * e.target.value : 키보드 입력을 캡쳐하는 키보드 이벤트 메시지
   */
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  // Enter키를 눌렀을 때 자동으로 추가 버튼이 클릭되도록
  // == : equal 연산자, eq연산을 할 때 자동으로 형변환을 수행
  //      어떤 경우에는 전혀 예상치 못한 true가 나오기도 한다.
  // === : identity 연산자
  //      객체, 배열등을 eq 연산을 하거나
  //      형변환이 되면 안되는 부분들에서
  // is 연산자와 비슷한 기능
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleCreate = () => {
    const { input, todoList } = this.state;
    this.setState({
      input: "",
      // 기존객체(JSON)배열에 새로운 객체(JSON)를 추가하는 함수
      todoList: todoList.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleToggle = id => {
    console.log(id);

    const { todoList } = this.state;

    // id 매개변수 변수에 담겨있는 값이
    // 객체 배열의 몇번째 위치ㄱ밧이냐
    const index = todoList.findIndex(todo => todo.id === id);

    // 인덱스에 해당하는 요소를 추출
    const selectTodo = todoList[index];

    // 기존의 todoList를 nextTodoList에 복사해두기
    const nextTodoList = [...todoList];

    // 기존에 chekecked값이 true -> false, falseo< fas
    nextTodoList[index] = {
      ...selectTodo,
      checked: !selectTodo.checked
    };

    // 여기에 오면 비로소 render()를 호출해서 화면에 반응을 한다.
    // 여기까지가 1개 아이템의 checked값을 변경시키는 코드
    this.setState({
      todoList: nextTodoList
    });
  };

  // 현재 클릭된(id가 선택된) 아이템만 남기고
  // 나머지 리스트만 추출하기
  handleDelete = id => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(todo => todo.id !== id)
    });
  };

  // react lifeCycle 중에 작동되는 method
  // 최초에 어플이 실행되면 한번 작동이 되고
  // 데이터나 화면 디자인이 변경되면 호출되는 method
  render() {
    // 자식 컴퍼넌트에 데이터를 전달하기 위해서
    // state로 선언된 데이터들을 props로 분해하기
    const { input, todoList } = this.state;

    // 현재 클래스에서 만든 method를 통째로
    // 자식 컴퍼넌트에 전달하기 위해 props로 생성
    const {
      handleCreate,
      handleChange,
      handleKeyPress,
      handleToggle,
      handleDelete
    } = this;

    return (
      <div>
        <TodoMain
          input={input}
          todoList={todoList}
          onCreate={handleCreate}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    );
  }
}

export default App;
