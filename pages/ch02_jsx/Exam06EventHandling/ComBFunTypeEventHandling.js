function ComBFunTypeEventHandling(props) {
  const handleBtn1 = (event) => {
    console.log("버튼1이 클릭되었습니다.");
    console.log(event.target.name); //name이라고 하는 것은 버튼의 속성이름
    console.log(event.type);
  };
  const handleBtn2 = (event, x, y) => {
    const result = x+y;
    console.log("계산 결과: " + result);
    console.log(event.target.name);
    console.log(event.type);
  };

  return(
    <div className="card">
      <div className="card-header">
        ComBFunTypeEventHandling
      </div>
      <div className="card-body"> {/* 리액트에서는 id를 쓰면 안됨. 왜? 리액트는 단일DOM (피피티43쪽에 필기)*/}
          <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼1</button>
          <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => handleBtn2(event, 3, 5)}>버튼2</button>
      </div>
    </div>
  );
}

export default ComBFunTypeEventHandling;