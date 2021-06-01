import React from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16)
}

class ComAClass extends React.Component{ //컴포넌트가 클래스로 만들어지면 클래스로부터 만들어지는 객체는 하나임.
  //상태가 바뀌면 클래스형 컴포넌트는 render라는 메소드만 재실행해서 ui를 바꾸는 작업을 함.
  //새로운 객체가 만들어지는 것이 아니고, 하나의 객체가 만들어지고 상태가 바뀌면 render를 재실행
  constructor(props){
    super(props);
    //상태 객체
    this.state = { //객체 타입으로 대입을 함. 클래스형 컴포넌트는 이런 식으로 객체 타입으로 반드시 제공해야 함!
      number: 0,
      color: "black"
    };
    this.addNumber = this.addNumber.bind(this);
  }

  addNumber(event) {
    this.setState({ //애는 내부적으로 비동기로 실행. 상태 비교를 해서 바뀌었다는 것을 알아채고 새로운 바뀐 데이터를 상태값으로 변경시켜주는 작업이 필요
      ...this.state, //전체가 그대로 이 새로운 객체에 들어감
      number: this.state.number+1 //현재의 값에 1을 더해서 상태 바꾸기 (전체 중에서 number만 변경하겠다)
    }, () => {
      console.log("이후: ", this.state.number); //콜백함수 (값이 바뀌고 이후 실행), 잘 쓰진 않지만 확인을 하고 싶거나 값이 바뀌고 뭔가 실행하고 싶다면 사용!
    }); //새로운 상태 객체
    //console.log("이전: ", this.state.number); //이거 출력해보면 setState가 비동기로 실행되기 때문에 바뀐 이전값이 출력됨.
  }

  changeColor = (event) => {
    this.setState({
      ...this.state,
      color: getRandomColor() //color의 값만 빨간색으로 바꾸겠다!
    });
  };

  render() {
    return(
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <h3 style={{color:this.state.color}}>{this.state.number}</h3> 
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={this.changeColor}>색깔 변경</button>
        </div>
      </div>
    );
  }
}

export default ComAClass;