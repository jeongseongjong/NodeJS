import React, { Component } from "react";
import PropTypes from "prop-types";
import BBsList from "./bbsList";

const BBS_FETCH_URL = "http://localhost:8080/bbs/api/json";
class bbsMain extends Component {
  state = {
    bbsList: [],
  };
  fetchBbsList = () => {
    fetch(BBS_FETCH_URL)
      .then((res) => {
        return res.json();
      }) // get으로 가져온 결과를 처리
      .then((result) => {
        this.setState({
          bbsList: result,
        });
      }) // return 된 res.json()의  값을 처리
      .catch((error) => {
        console.log(error);
      }); // 오류가 발생햇을 때 처리
  };
  render() {
    const { bbsList } = this.state;
    return (
      <div>
        <BBsList bbsList={bbsList} />
      </div>
    );
  }

  componentWillMount() {}

  /*
    현재 BBsMain 컴포넌트가 랜더링 되어 화면에
    그려질때 호출되는 method로
    여기에서 서버로부터 데이터를 가져오는
    fetchBBsList를 실행한다.
  */
  componentDidMount() {
    this.fetchBbsList();
  }

  componentWillReceiveProps(nextProps) {}

  /*
    lifCycle method를 통해서
    어떤 일을 실행하려고 할 때
    return true를 실행해 주자
  */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}
}

bbsMain.propTypes = {};

export default bbsMain;
