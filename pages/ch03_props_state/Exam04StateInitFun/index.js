import { useState } from "react";

function getBoardList() {
  return ([
    {bno:1, btitle:"제목1", bcontent:"내용1"},
    {bno:2, btitle:"제목2", bcontent:"내용2"},
    {bno:3, btitle:"제목3", bcontent:"내용3"},
  ]);
}

function Exam04StateInitFun() {
  //const [boardList, setBoardList] = useState(getBoardList()); //리렌더링 할 때 마다 호출
  const [boardList, setBoardList] = useState(getBoardList); //함수 호출 코드 아니라, 함수 그 자체를 넣음! (최초 렌더링 시 딱 한번 호출)
  const [newBno, setNewBno] = useState(4);

  const addBoard = (event) => {
    setBoardList(boardList.concat({
      bno: newBno,
      btitle: "제목" + newBno,
      bcontent: "내용" + newBno
    }));
    setNewBno(newBno + 1);
  };

  return(
    <div className="card">
    <div className="card-header">
      Exam04StateInitFun
    </div>
    <div className="card-body">
      <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th>bno</th>
            <th>btitle</th>
            <th>bcontent</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map(board=>(
            <tr className="text-center" key={board.bno}>
              <th>{board.bno}</th>
              <td>{board.btitle}</td>
              <td>{board.bcontent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Exam04StateInitFun;