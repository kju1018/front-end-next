import { useState } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16)
}

function ComAFun(props) { 
  //함수형은 클래스형이 아니어서 객체라는 개념이 없음.
  //상태가 바뀌게 되면, 컴포넌트에 해당되는 함수가 매번 반복해서 실행됨. 함수자체가 재실행.
  //그래서 함수형 컴포넌트와 클래스형 컴포넌트는 완전 동작방법이 다름!!!
  //이전 상태와 똑같은 상태로 바뀌면 다시 함수가 실행되지 않음. 즉 ui변경이 없으니 다시 실행할 이유가 없음!
  //효율적으로 따지만 함수형이 더 효율적. 클래스형은 이전 상태를 그대로 줘도 render를 재실행 했음.
  //좀 더 세밀하게 제어할 수 있는 것은 클래스형!! 편하게 쓰려면? 함수형 (요즘 추세는 함수형) 
  let name = "홍길동"; //상태 아니고 변수
  
  const [state, setState] = useState({ //객체가 아니고 그냥 useState("aa") 이런식으로 문자열을 줘도 괜찮음. 
    number: 0,
    cololr: "black"
  });

  const addNumber = (event) => {
    setState({
      ...state,
      number: state.number+1
    });
    name = "리액트"; //여기서 리액트로 변경했는데 왜 안바뀜? 함수가 재실행되면서 결국 이름이 다시 홍길동이 됨.
    //일반 변수 데이터와 상태 데이터는 다름!! 상태 데이터는 리액트에서 관리해서 함수가 재실행되도 리액트가 관리함.
    //근데 변수는 리액트가 관리X. 그래서 재시작하게 되면 변수 초기화 됨.
    //내가 어떤 데이터를 변수로 만들지 상태로 만들지 그 기준은 어떻게? ui가 바뀌더라도 계속 값(데이터)을 유지해야 한다면 '상태'
    //근데 일회성이라면 '변수'
  };

  const changeColor = (event) => {
    setState({
      ...state,
      color: getRandomColor()
    });
  };


  return(
    <div class="card">
        <div class="card-header">
          ComAFun
        </div>
        <div class="card-body">
          name: {name}
          <h3 style={{color:state.color}}>{state.number}</h3> 
          <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자 증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={changeColor}>색깔 변경</button>
        </div>
    </div>
  );
}

export default ComAFun;