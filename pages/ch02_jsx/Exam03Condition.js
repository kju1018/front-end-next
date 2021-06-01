function Exam03Condition(props) {
  const var1 = "리액트";
  const var2 = false;
  const var3 = ""; //빈문자열
  let var4;
  let var5 = null;
  const var6 = 0;

  return(
    <div className="card">
      <div className="card-header">
       Exam03Condition
      </div>
      <div className="card-body">
        <h6 className="text-info">삼항 연산식을 이용한 선택 렌더링</h6>
      <div>
        <div>{var1 === "리액트"? <p>내용1</p> : <p>내용 없음</p>}</div>
        <div>{var1 !== "리액트"? <p>내용2</p> : null}</div>   {/* 내용이 없다는 것을 나타내기 위해 null을 넣을 수도 있음 */}
      </div>

      <h6 className="text-info">&&을 이용한 선택 렌더링</h6>
      <div>
        <div>{var1 === "리액트" && <p>내용3</p>}</div> {/*ture이면 뒤 내용이 값이 되고 false가 되면 아무것도 없는 것*/}
        <div>{var1 && <p>내용4</p>}</div> {/*자바스크립트에선 undifined, 빈문자열이 false를 가짐*/}
        <div>{var2 && <p>내용5</p>}</div> 
        <div>{var3 && <p>내용6</p>}</div> 
        <div>{var4 && <p>내용7</p>}</div> 
        <div>{var5 && <p>내용8</p>}</div> 
        <div>{var6 !== 0 && <p>내용9</p>}</div> {/*var6의 값이 0임. var6 && 이렇게 쓰는거 주의해야 함! 0이 출력됨.*/}
      </div>

      <h6 className="text-info">||을 이용한 선택 렌더링</h6>
      <div>
        <div>{var1 || <p>내용9</p>}</div> {/* ||이건 false가 되면 뒤에 내용이 출력됨. 그래서 내용9빼고 다 출력*/}
        <div>{var2 || <p>내용10</p>}</div> 
        <div>{var3 || <p>내용11</p>}</div> 
        <div>{var4 || <p>내용12</p>}</div> 
        <div>{var5 || <p>내용13</p>}</div> 
      </div>
      </div>
    </div>
  );
}

export default Exam03Condition;