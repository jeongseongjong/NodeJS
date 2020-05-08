import React, { Component } from "react";

class bbsDetail extends Component {
  state = {
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
    bbsVO: {},
  };

  // 서버에게 bbsid값을 전달하고
  // bbs detail 정보를 가져와서
  // 나에게 보여달라
  bbsDetailFetch = () => {
    const bbsid = this.props.match.params.bbsid;
    fetch("http://localhost:8080/bbs/api/detail?bbsid=" + bbsid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          bbsDate: result.bbsDate,
          bbsAuth: result.bbsAuth,
          bbsTitle: result.bbsTitle,
          bbsText: result.bbsText,

          bbsVO: result,
        });
      });
  };

  componentDidMount() {
    this.bbsDetailFetch();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleDelete = (e) => {
    if (window.confirm("삭제할까요?")) {
      const bbsid = this.props.match.params.bbsid;
      fetch("http://localhost:8080/bbs/api/delete/" + bbsid)
        .then(this.props.history.push("/"))
        .catch((error) => alert(error));
    }
  };

  handleUpdate = (e) => {
    const bbsid = this.props.match.params.bbsid;
    // 누구한테 보낼것인가
    this.props.history.push("/bbsWrite/" + bbsid);
  };
  render() {
    const bbsid = this.props.match.params.bbsid;
    const { bbsVO } = this.state;

    return (
      <div>
        <h3>나는 {bbsid}입니다.</h3>
        <div className="display-flex">
          <p>작성일자 : {bbsVO.bbsDate}</p>
          <p>작성자 : {bbsVO.bbsAuth}</p>
        </div>
        <p>제목 : {bbsVO.bbsTitle}</p>
        <p>내용 : {bbsVO.bbsText}</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={(e) => this.props.history.push("/")}
        >
          목록으로 돌아가기
        </p>
        <div
          className="w3-button w3-blue w3-margin"
          style={{ cursor: "pointer" }}
          onClick={this.handleUpdate}
        >
          {" "}
          수정
        </div>
        <button
          className="button-group text-right"
          style={{ cursor: "pointer" }}
          onClick={this.handleDelete}
        >
          삭제
        </button>
      </div>
    );
  }
}

export default bbsDetail;
