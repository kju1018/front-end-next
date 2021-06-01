import { useRef } from "react";

function ComA(props) { //함수형
  const inputRef = useRef(); //Dom의 참조형. useRef() 꼭 써서 만들어줘야 함.
  const divRef = useRef();

  const handleBtn = (event) => {
    inputRef.current.style.backgroundColor = "orange";
    inputRef.current.focus();
    divRef.current.innerHTML = "<img src='/resources/img/photo1.jpg' width='200'/>";
  };

  return(
    <div className="card">
      <div className="card-header">
        ComA
      </div>
      <div className="card-body">
        <div className="form-row align-items-center">
          <input type="text" ref={inputRef}/> {/* input이라는 dom객체의 번지가 inputRef->여기에 저장이 됨.*/}
          <button className="ml-2 btn btn-primary btn-sm" onClick={handleBtn}>DOM 변화주기</button>
        </div>
        <div className="mt-2" ref={divRef}>
        </div>
      </div>
    </div>
  );
}

export default ComA;