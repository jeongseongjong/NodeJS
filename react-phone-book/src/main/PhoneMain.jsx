import React, { Component } from "react";
// import PropTypes from "prop-types";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";
class PhoneMain extends Component {
  id = 4;
  state = {
    phoneList: [
      { id: 0, name: "나", phone: "010-1111-1111" },
      { id: 1, name: "가", phone: "010-2222-2222" },
      { id: 2, name: "다", phone: "010-3333-3333" },
      { id: 3, name: "라", phone: "010-4444-4444" }
    ]
  };

  // 진리의 원천(source of truth)
  state = {
    // my_value는 아래의 my_value_change의 my_value가 된다.
    my_value: ""
  };

  //   componentWillMount() {}
  //   componentDidMount() {}
  //   componentWillReceiveProps(nextProps) {}
  //   shouldComponentUpdate(nextProps, nextState) {}
  //   componentWillUpdate(nextProps, nextState) {}
  //   componentDidUpdate(prevProps, prevState) {}
  //   componentWillUnmount() {}

  my_value_change = arg => {
    this.setState({ my_value: arg });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h2>MY PHONE BOOK</h2>
        </header>
        <section>
          <PhoneInsert
            my_value={this.state.my_value}
            my_value_change={this.my_value_change}
          />
          <PhoneList
            phoneList={this.state.phoneList}
            my_value={this.state.my_value}
            name="홍길동"
            tel="12345"
            addr="서울특별시"
          />
        </section>
      </React.Fragment>
    );
  }
}
// PhoneMain.PropTypes = {};

export default PhoneMain;
