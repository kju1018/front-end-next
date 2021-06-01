import { readBoard, updateBoard } from "apis/boards";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function BoardUpdateForm(props) {
  const bno = parseInt(props.match.params.bno);
  const history = useHistory();
  
  const [board, setBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: ""
  });

  useEffect(() => {
    const work = async () => {
      try{
        const response = await readBoard(bno);
        setBoard(response.data); //상태변경을 일으키기때문에 함수 재실행
      } catch (error){
        console.log(error);
      }
    };
    work();
  }, [bno]); //bno가 바뀔 때만 실행됨 => 제일 처음에만 실행된다. 상태가 바뀌더라도 실행X

  const handleUpdate = async (event) => {
    event.preventDefault();
    const dirtyBoard = {...board}; //복제한 새로운 객체
    await updateBoard(dirtyBoard);
    history.goBack(); 
  };

  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name] : event.target.value
    });
  };
  
  const handleCancel = (event) => {
    history.goBack();
  };

  return(
    <div className="card">
      <div className="card-header">
        BoardUpdateForm
      </div>
      <div className="card-body">
        <form onSubmit={handleUpdate}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-primary btn-sm mr-2" value="수정"/>
              <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardUpdateForm;