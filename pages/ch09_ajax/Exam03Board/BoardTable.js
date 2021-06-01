import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getBoardList } from "apis/boards";


function BoardTable(props) {
  const router = useRouter();
  const pageNo = parseInt(router.query.pageNo) || 1;

  const [page, setPage] = useState(null);

  const changePageNo = async (pageNo) => {
    try{
      const response = await getBoardList(pageNo);
      //pager, boards가 들어있는 data를 상태에 저장
      setPage(response.data);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    changePageNo(pageNo);
  }, [pageNo]);

  return (
    <div className="card">
    <div className="card-header">
      BoardTable
    </div>
    <div className="card-body">
      {page!=null &&
        <div>
          <div className="mb-3">
            <Link href="/ch09_ajax/Exam03Board/BoardWriteForm"><a className="btn btn-success btn-sm">생성</a></Link>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {page.boards.map(board => {
                return (
                  <tr key={board.bno}>
                    <td>{board.bno}</td>
                    <td><Link href={`/ch09_ajax/Exam03Board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}`}><a>{board.btitle}</a></Link></td>
                    <td>{board.bwriter}</td>
                    <td>{new Date(board.bdate).toLocaleDateString()}</td>
                    <td>{board.bhitcount}</td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan="5" style={{textAlign: "center"}}>
                  <button className="btn btn-outline-primary btn-sm mr-1" onClick={() => changePageNo(1)}>처음</button> 
                  {(page.pager.groupNo > 1) && 
                    <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.startPageNo-1)}>이전</button>
                  }
                  {page.pager.pageArray.map(i =>
                    <button className={`btn ${i===page.pager.pageNo?"btn-danger":"btn-outline-success"} btn-sm mr-1`} key={i} onClick={() => changePageNo(i)}>{i}</button>
                  )}
                  {page.pager.groupNo < page.pager.totalGroupNo && 
                    <button   className="btn btn-outline-info btn-sm mr-1" onClick={()=> changePageNo(page.pager.endPageNo+1)}>다음</button>
                  }
                  <button className="btn btn-outline-primary btn-sm" onClick={() => changePageNo(page.pager.totalPageNo)}>맨끝</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  </div>
  );
}

export default BoardTable;