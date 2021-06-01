function ComC(props) {
  const boards = [
    {bno:1, btitle:"제목1", bwriter:"user1", bdate:new Date(), bhitcount:0},
    {bno:2, btitle:"제목2", bwriter:"user2", bdate:new Date(), bhitcount:3},
    {bno:3, btitle:"제목3", bwriter:"user3", bdate:new Date(), bhitcount:5}
  ];
  return(
    <div className="card">
      <div className="card-header">
        ComC
      </div>
      <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bwriter</th>
                <th>bdate</th>
                <th>bhitcount</th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => { //map은 원래 가지고 있는 항목을 이런 ui요소로 하나하나 바꾸겠다. (리액트에서 for문 사용불가능!)
                return (
                  <tr key={board.bno}>
                    <td>{board.bno}</td>
                    <td>{board.btitle}</td>
                    <td>{board.bwriter}</td>
                    <td>{board.bdate.toLocaleDateString}</td>
                    <td>{board.bhitcount}</td>
                  </tr>
                );
                })}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default ComC;