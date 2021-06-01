import { createBoardNoAttach } from "apis/boards";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function BoardWriteForm(props) {
  const [board, setBoard] = useState({
    btitle:"",
    bcontent:""
  });

  const globalUid = useSelector(state => state.authReducer.uid);
  const history = useHistory();

  const handleAdd = async (event) => {
    event.preventDefault();
    try{
      const newBoard = {...board}; //새로운 복제 객체를 만듦 (상태를 그냥 전달하면 안됨)
      newBoard.bwriter = globalUid;
      await createBoardNoAttach(newBoard);
      history.goBack(); //뒤로 가기
    } catch(error){
      console.log(error);
    }
    
  };

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name] : event.target.value
    });
  }

  const handleCancel = (envet) => {
    history.goBack();
  };

  return(
    <div className="card">
      <div className="card-header">
        BoardWriteForm
      </div>
      <div className="card-body">
        <form onSubmit={handleAdd}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-primary btn-sm mr-2" value="추가"/>
              <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardWriteForm;