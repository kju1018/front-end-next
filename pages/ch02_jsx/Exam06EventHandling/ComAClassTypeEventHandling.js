import React from "react";

class ComAClassTypeEventHandling extends React.Component {
  constructor(props) { //생성자 작성 가능
    super(props);
    //방법1 
    this.handleBtn1 = this.handleBtn1.bind(this); //이 메소드가 어디서 호출되던지 상관없이, 이 내부에서 this는 내 객체여야 한다는 뜻.
    // 이 안에서 this를 쓰고 있다면 '나'와 연결시켜줘
    this.handleBtn2 = this.handleBtn2.bind(this);
  }
  method1() {
    console.log("method1() 실행");
  }

  handleBtn1(event){ //이 안에서 this를 써서 이 객체의 또 다른 멤버를 사용하고 싶은 경우에는 반드시 생성자 만들어서 this를 명시하기 위한 bind해줘야 함.
    console.log("버튼1이 클릭되었습니다.");
    console.log(event.target.name); //name이라고 하는 것은 버튼의 속성이름
    console.log(event.type);
    this.method1(); //이거 그냥 쓰면 안 먹혀서 해결해주기 위해서 constructor 작성
  }

  handleBtn2(event, x, y){
    const result = x+y;
    console.log("계산 결과: " + result);
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  }
  
  //방법2
  // 클래스 안에서 화살표 함수에서의 this는 자신의 객체를 참조
  handleBtn3 = (event) => { //이건 메소드 아님. 속성을 만들어서 화살표함수 작성한 것. 자신을 맵핑하고 있는 객체를 참조. bind필요 없음.
    console.log("버튼3이 클릭되었습니다.");
    console.log(event.target.name); 
    console.log(event.type);
    this.method1(); //이 this는 자기를 포함하고 있는 객체를 참조하니까, 따로 방법1처럼 할 필요가 없음.
  };

  handleBtn4 = (event) => {
    console.log("버튼4이 클릭되었습니다.");
    console.log(event.target.name); 
    console.log(event.type);
    this.method1(); 
  };

  render() {
    return(
      <div className="card">
      <div className="card-header">
          Home
      </div>
      <div className="card-body">
        <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼1</button> {/*this 붙이는거 잊지말기. 여기서 this는 window객체*/}
        <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => this.handleBtn2(event, 3, 5)}>버튼2</button>
        <button name="btn3" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn3}>버튼3</button>
        <button name="btn4" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn4}>버튼4</button>
      </div>
    </div>
    );
  }
}

export default ComAClassTypeEventHandling;