import React, { Component } from "react";
import TodoItem from "./TodoItem";

/**
 * LifeCycle method
 * code snippet이 생성하는 method는 16.3이전에 주로 사용하던 method
 * 16.3 이후에는 일부 method가 변경되거나 소멸된다.
 * 소멸되는 method : 성능상의 이슈를 발생시킬 수 있는 소지가 있어
                    소멸하거나 다른 method로 대치(변경)하기로 결정되었다.
 *
 *
 * 처음 컴퍼넌트를 생성하고 저장을 start를 했을 때
 *
 * 1. constructor()가 먼저 실행 된다.
 * 2. componentWillMount()가 실행.
 * 3. render() 실행
 * 4. componentDidMount 실행
 */

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  /**
   * 화면에 리스트를 표시하기 위한 todoList 배열이
   * 변경이 되었는지를 판단해서
   * render()함수를 호출할지 안할지를 알려주는 method
   *
   * js에서 객체(배열) == 객체(배열) 비교를 할 경우
   * 간혹 비슷한 주소위치를 참조하여 서로 내용이 다름에도 같은 배열로 나타나는 경우가 있다.
   * 객체(배열) === 객체(배열) 처럼 비교를 하면
   * 깊이비교(내용으로) 비교를하여 정확한 결과를 얻을 수 있다.
   */
  shouldComponentUpdate(nextProps, nextState) {
    let r = this.props.todoList !== nextProps.todoList;
    console.log(r);
    return r;
    // return true;
  }

  render() {
    // 부모 컨퍼넌트에서 전달받은 데이터를 분해
    const { todoList, onToggle, onDelete } = this.props;
    const todoMaps = todoList.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ));
    return <div>{todoMaps}</div>;
  }

  // v17 이후에서는 사용불가 상태
  // componentWillMount() {}

  // // v17 이후에서는 사용불가 상태
  // componentDidMount() {}

  // // v17 이후에서는 사용불가 상태
  // // getDeriverdStateFromProps()으로 변경
  // componentWillReceiveProps(nextProps) {}

  // // v17 이후에서는 사용불가 상태
  // // getSnapshotBeforUpdate()로 변경
  // componentWillUpdate(nextProps, nextState) {}

  // // v17 이후에서는 사용불가 상태
  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}
}

export default TodoList;
