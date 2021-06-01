import React from "react";
import PropTypes from "prop-types";

class ClassTypeProps extends React.Component{
  // constructor(props) {
  //   super(props);
  // } 기본(디폴트)이 이거여서 왜 작성했냐고 노란줄 떠서 주석처리 해놓음

  render() {
    const {name, version, children} = this.props;

    return(
      <div class="card">
          <div class="card-header">
            ClassTypeProps
          </div>
          <div class="card-body">
            <div>name: {name}</div>
            <div>version: {version}</div>
            {children}
          </div>
      </div>
    );
  }
}

//디폴트 속성값 설정
ClassTypeProps.defaultProps = {
  version: 17
};

//타입과 필수 설정
ClassTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
};

export default ClassTypeProps;