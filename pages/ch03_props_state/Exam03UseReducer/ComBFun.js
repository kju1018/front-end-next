import { useReducer, useState } from "react";

function reducer(prevBoards, action){
  //action이 어떻게 들어왔는지 정의할 필요가 있음. 이 액션을 처리하기 위해서 어떤 데이터를 더 받아야하는가!
  if(action.type === "ADD") { //{type: "ADD", board:{...}}
    const newBoards = prevBoards.concat(action.board);
    return newBoards; //새로운 배열 return. 왜 배열 리턴? boards가 배열이니까!
  } else if(action.type === "DELETE") { //{type: "DELETE", bno:1}
    const newBoards = prevBoards.filter((board) => board.bno !== action.bno);

    return newBoards;
  } else if(action.type === "UPDATE") {//{type: "DELETE", board:{bno:xx, btitle:xx, bcontetn:xx}}
    const newBoards = prevBoards.map((board) => {
      if(board.bno === action.board.bno) {
        return action.board;
      } else {
        return board;
      }
    });
    return newBoards;
  } else{
    return null;
  }
}

function ComBFun(props){
  const [boards, dispatch] = useReducer(reducer, [ //최초로 ui가 만들어졌을 때 그 때 딱 한번 적용되고, 그 다음엔 변경된 내용을 갖고 있음.
    {bno:1, btitle:"제목1", bcontent:"내용1"},
    {bno:2, btitle:"제목2", bcontent:"내용2"},
    {bno:3, btitle:"제목3", bcontent:"내용3"},
  ]);
  const [newBno, setNewBno] = useState(3);
  const [newBoard, setNewBoard] = useState({
    btitle: "",
    bcontent: ""
  });

  const [updateBoard, setUpdateBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: ""
  });

  const changeNewBoard = (event) => {
    setNewBoard({
      ...newBoard,
      [event.target.name] : event.target.value
    });
  };

  const addBoard = (event) => {
    const board = {...newBoard, bno:newBno}; //bno추가해서 새로운 객체를 board에 담고
    dispatch({type:"ADD", board:board});
    setNewBno(newBno + 1); //bno상태 업데이트
    setNewBoard({ //추가하고 비워주기
      btitle: "",
      bcontent: ""
    }); 
  };

  const deleteBoard = (bno) => {
    dispatch({type:"DELETE", bno});
  };

  const changeUpdateBoard = (event) => {
    setUpdateBoard({
      ...updateBoard,
      [event.target.name] : event.target.value
    });
  }

  const selectBoard = (bno) => {
    const selectedBoard = boards.find(board => board.bno === bno);
    setUpdateBoard({...selectedBoard}); //완전히 복제해서 넘겨주기
  }

  const handleUpdate = (event) => {
    dispatch({type: "UPDATE", board:updateBoard});
    setUpdateBoard({
      bno:"",
      btitle:"",
      bcontent:""
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={newBoard.btitle} onChange={changeNewBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={newBoard.bcontent} onChange={changeNewBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boards.map(board => {
                return(
                  <tr key={board.bno}>
                    <td>{board.bno}</td>
                    <td>{board.btitle}</td>
                    <td>{board.bcontent}</td>
                    <td  style={{width:"150px"}}>
                      <button className="btn btn-info btn-sm mr-1" onClick={() => selectBoard(board.bno)}>선택</button>
                      <button className="btn btn-danger btn-sm mr-1" onClick={() => deleteBoard(board.bno)}>삭제</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>bno</td>
                <td><input type="text" name="bno" style={{width:"100%"}} value={updateBoard.bno} readOnly/></td>
              </tr>          
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={updateBoard.btitle} onChange={changeUpdateBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={updateBoard.bcontent} onChange={changeUpdateBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={handleUpdate}>수정</button>
        </div>      
      </div>
    </div>
  );
}

export default ComBFun;