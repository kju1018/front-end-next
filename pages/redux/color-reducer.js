//상태 초기값 선언
const initialState = { //처음에 컴포넌트가 전역데이터를 읽을 때
  color: "yellow" 
};

//액션 타입 선언
const SET_COLOR = "color/setColor"; //이를 선언함으로써 밑에서 간편하게 작성가능

//액션 생성 함수 선언
export const createSetColorAction = (color) => { //얘를 호출해서 얻는 걷은? 액션객체
  return {type:SET_COLOR, color}//이게 액션 객체 역할
}; //

//리듀스 선언
const colorReducer = (state=initialState, action) => {//값이 주어지지않으면 initialState(디폴트 값) 사용
  if(action.type === SET_COLOR) {
    return {color: action.color};
  } else {
    return state;
  }
};

export default colorReducer;