import { useState } from "react";
import produce from "immer";

function ComCFun (props) {
  const [joinForm, setJoinForm] = useState({
    uid: "",
    uname: "",
    upassword: "",
    ujob: "developer",
    uskill: []
  });

  const handleSubmit = (event) => {
    event.preventDefault(); //refresh안되게 막아놓기
    console.log(joinForm);
  };

  const handleChange = (event) => { 
    if(event.target.name !== "uskill"){
      setJoinForm(produce((draft) => { //원본이 바뀌는 것이 아니라 복제된 것의 값을 바꿈. draft는 이전 상태를 복제한 객체
        draft[event.target.name] = event.target.value; //변수 안에 속성이름을 변수로 호출할 때 []대괄호로 묶어주는것. 배열 아님
      }));
    } else {
      if(event.target.checked){
        setJoinForm(produce((draft) => { //produce는 draft를 리턴 (콜백함수를 리턴, 복잡하니까 값을 리턴한다고 생각하기)
          draft.uskill.push(event.target.value);
        })) //따로 리턴문이 필요없음
      } else {
        setJoinForm(produce((draft) => {
          var index = draft.uskill.findIndex(item => item === event.target.value);
          draft.uskill.splice(index, 1); //index위치에서 하나를 지워라. splice도 원본 자체에서 항목을 빼버림
        })
        )
      }
    }
  };

  return(
    <div className="card">
    <div className="card-header">
      ComCFun
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">ID</label>
          <div className="col-sm-10"> {/* 상태를 업데이트 하려면 onChange 무조건 써줘야 함 */}
            <input type="text" className="form-control" name="uid" onChange={handleChange}/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uname" onChange={handleChange} autoComplete="username"/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" name="upassword" onChange={handleChange} autoComplete="current-password"/>
          </div>
        </div>
        <fieldset className="form-group row">
          <legend className="col-form-label col-sm-2 float-sm-left pt-0">Job</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="ujob" value="developer" onChange={handleChange} checked={joinForm.ujob === "developer"} />
              <label className="form-check-label">
                개발자
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="ujob" value="designer" onChange={handleChange} checked={joinForm.ujob === "designer"} />
              <label className="form-check-label">
                디자이너
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="ujob" value="pm" onChange={handleChange} checked={joinForm.ujob === "pm"} />
              <label className="form-check-label">
                프로젝트 관리자
              </label>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
        <label className="col-sm-2 col-form-label">Skill</label>
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="uskill" value="java" onChange={handleChange}/>
              <label className="form-check-label">
                자바
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="uskill" value="spring" onChange={handleChange}/>
              <label className="form-check-label">
                스프링
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="uskill" value="react" onChange={handleChange}/>
              <label className="form-check-label">
                리액트
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary btn-sm">가입</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default ComCFun;