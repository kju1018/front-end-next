import { useReducer } from "react";

//방법 1
//상태를 변경하는 함수 (이거 외부파일로 뺄 수 있음 -> number-reducer.js)
/* function reducer(prevstate, action) { //매개값 고정적으로 이렇게 넣어야 함 (prevstate는 현재(이전)상태, action으로 상태변경 통보받음)
  if(action.type === "INCREMENT") {
    return{
      number: prevstate.number + 1 //현재 number에서 +1 해서 새로운 상태 return
    };
  } else if(action.type === "DECREMENT") {
    return{
      number: prevstate.number - 1
    };
  } else {
    return null; //반드시 return해야함
  }
} */

//방법 2 (컴포넌트 밖에서 정의. 재사용성 ↑)
import reducer from "./number-reducer";

function ComAFun(props){
  /*
  state: 초기 상태
  dispatch: 상태 변경 통보 함수
  */
  const [state, dispatch] = useReducer(reducer, {number: 0}); //useReducer의 두번째 매개값은 초기값

  //이벤트 처리 함수
  const incrementCounter = (event) => { //여기서 값을 즉시 바꾸는 것이 아니라 통보만 함
    //상태 변경 통보 -> 상태 변경 좀 해죠~~! -> 통보는 누가 받음? reducer. 두번째 매개값으로 받음.
    dispatch({ //상태를 어떻게 변경할건지 여기에 객체로 작성. type에다가 통보 내용 전달
      type:"INCREMENT"
    });
  };
  const decrementCounter = (event) => {
    //상태 변경 통보
    dispatch({type: "DECREMENT"});
  };

  return (
    <div className="card">
    <div className="card-header">
      ComAFun
    </div>
    <div className="card-body">
      <p>현재 카운트 값: {state.number}</p>
      <button className="btn btn-primary btn-sm mr-2" onClick={incrementCounter}>증가</button>
      <button className="btn btn-primary btn-sm" onClick={decrementCounter}>감소</button>
    </div>
  </div>
  );
}

export default ComAFun;