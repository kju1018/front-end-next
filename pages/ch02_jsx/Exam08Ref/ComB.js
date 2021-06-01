import React from "react";
import { createRef } from "react";

class ComB extends React.Component { //클래스형
  constructor(props) {
    super(props);
    this.handleBtn = this.handleBtn.bind(this);
    this.inputRef = createRef(); //클래스형은 createRef(), 함수형은 useRef()
    this.divRef = createRef(); //클래스형은 객체의 속성으로 되어있는 것은 무조건 this붙여야 함.
  }

  handleBtn(event) { //메소드로 선언하면 this를 바인딩 해줘야함 (7줄)
    this.inputRef.current.style.backgroundColor = "orange";
    this.inputRef.current.focus();
    this.divRef.current.innerHTML = "<img src='/resources/img/photo1.jpg' width='200'/>";
  }

  render() {
    return(
      <div className="card">
      <div className="card-header">
        ComB
      </div>
      <div className="card-body">
        <div className="form-row align-items-center">
          <input type="text" ref={this.inputRef}/> {/* input이라는 dom객체의 번지가 inputRef -> 여기에 저장이 됨.*/}
          <button className="ml-2 btn btn-primary btn-sm" onClick={this.handleBtn}>DOM 변화주기</button>
        </div>
        <div className="mt-2" ref={this.divRef}>
        </div>
      </div>
    </div>
    );
  }
}

export default ComB;