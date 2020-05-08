import React from "react";
import axios from "axios";

class bbsWrite extends React.Component {
  state = {
    id: 0,
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };

  /*
    axios를 사용하여 서버로 데이터를 전송

    Router로 감싸진 상태의 컴포넌트들은
    props로 match, location, history와 같은 객체를
    상위 Router로 부터 전달받는다
    match, location은 보통 query 문자열을 통하여
    변수값을 전달받을 때 사용하고
    history는 push() 메서드를 사용하여
    어떤일을 수행한 후
    원하는 path로 점프하는 코드를 수행할 수 있다.
  */
  bbsInsert = () => {
    let formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("bbsDate", this.state.bbsDate);
    formData.append("bbsAuth", this.state.bbsAuth);
    formData.append("bbsTitle", this.state.bbsTitle);
    formData.append("bbsText", this.state.bbsText);

    axios
      .post("http://localhost:8080/bbs/api/insert", formData)
      .then((result) => {
        const bbsid = result.data.id;
        this.props.history.push("/bbsDetail/" + bbsid);
      })
      .catch((error) => console.log(error));
  };

  bbsDetailFetch = () => {
    // 만약 ...bbsid 값이 undefined이면 0을 id에 저장하고
    // 아니라면 그 문자열을 id에 저장하라
    const bbsid = this.props.match.params.bbsid || 0;
    // id = this.props.match.params.bbsid == 'undefined' ? 0 : ..bbsid
    if (bbsid == 0) return;
    fetch("http://localhost:8080/bbs/api/detail?bbsid=" + bbsid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          id: result.id,
          bbsDate: result.bbsDate,
          bbsAuth: result.bbsAuth,
          bbsTitle: result.bbsTitle,
          bbsText: result.bbsText,
        });
      });
  };

  componentDidMount() {
    this.bbsDetailFetch();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handlerOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="form-group">
          <label>작성일자</label>
          <input
            onChange={this.handlerOnChange}
            value={this.state.bbsDate}
            type="date"
            name="bbsDate"
            className="form-control"
            placeholder="날짜를 입력"
          />
        </div>
        <div className="form-group">
          <label>작성자</label>
          <input
            onChange={this.handlerOnChange}
            className="form-control"
            name="bbsAuth"
            value={this.state.bbsAuth}
            placeholder="작성자 입력"
          />
        </div>
        <div className="form-group">
          <label>제목</label>
          <input
            onChange={this.handlerOnChange}
            className="form-control"
            name="bbsTitle"
            value={this.state.bbsTitle}
            placeholder="제목을 입력"
          />
        </div>
        <div className="form-group">
          <textarea
            rows="5"
            name="bbsText"
            value={this.state.bbsText}
            onChange={this.handlerOnChange}
            className="form-control"
          />
        </div>
        <div className="button-group text-right">
          <button
            onClick={this.bbsInsert}
            type="button"
            className="btn btn-primary"
          >
            저장
          </button>
        </div>
      </div>
    );
  }
}

export default bbsWrite;
