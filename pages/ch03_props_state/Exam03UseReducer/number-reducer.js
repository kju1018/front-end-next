//상태를 변경하는 함수
function reducer(prevstate, action) { //매개값 고정적으로 이렇게 넣어야 함 (prevstate는 현재(이전)상태, action으로 상태변경 통보받음)
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
}

export default reducer;