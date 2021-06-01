import { deleteBoard, downloadAttach, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Link from "next/link";

function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);
  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
  const pageNo = parseInt(queryString.pageNo);

  const [board, setBoard] = useState({});

  useEffect(() => {
    const work = async () => {
      try{
        const response = await readBoard(bno);
        setBoard(response.data); //상태변경을 일으키기때문에 함수 재실행
        //여긴 이미지파일이 오진 않음.
      } catch (error){
        console.log(error);
      }
    };
    work();
  }, [bno]); //마운트할 때, bno가 업데이트될 때 모두 실행
  
  const history = useHistory();

  const handleRemove = async (event) => {
    try{
      await deleteBoard(bno);
      history.goBack();
    } catch(error){
      console.log(error);       
      // history.push("/error");
    }
  };

  //방법1 (상태로 저장해서 받는다는 것은 귀찮은 일! 그래서 두번째 방법을 주로 쓸 것)
  const [imgSrc, setImgSrc] = useState(null);
  const imgTag = useRef();
  useEffect(()=>{ //이미지를 다운로드하기 위한 useEffect. useEffect는 async작성불가능
    if(board.battachoname){ //bataachoname이 존재할 경우 그림만 다시 받아오기 위함
      const work = async () => {
        try {
          const response = await downloadAttach(board.bno);
          setImgSrc(URL.createObjectURL(response.data)); //response.data에 있는 이미지를 url object로 만들어서 setter의 매개값으로 전달하기 (이미지 데이터의 경우)
        } catch(error){
          console.log(error);
        }
      };
      work(); //비동기로 실행
    }
  }, [board]); //board상태가 바뀔 때마다 실행. 왜? board안에 이미지정보가 들어가 있으니까!

  //방법2
  const authToken = useSelector(state => state.authReducer.authToken); //redux에 있는 authToken 얻기

  return(
    <div className="card">
    <div className="card-header">
      BoardRead
    </div>
    <div className="card-body">
      {board &&
        <>
        <div className="row">
          <div className="col-md-6">
            <p>bno: {board.bno}</p>
            <p>btitle: {board.btitle}</p>
            <p>bcontent: {board.bcontent}</p>
            <p>bwriter: {board.bwriter}</p>
            <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
            <p>bhitcount: {board.bhitcount}</p>
            <p>battachoname: {board.battachoname}</p>
            <p>battachsname: {board.battachsname}</p>
            <p>battachtype: {board.battachtype}</p>
          </div>

            <div className="col-md-6">
              {board.battachoname &&
                <div>
                  {/*방법 1 (axios를 이용하는 방법)*/}
                  <img src={imgSrc} alt="" width="200"/>
                  <hr/> 
                  {/*방법 2*/}
                  {/*axios를 이용해야 authToken이 넘어감. 이렇게 요청하면 헤더에 넘길 수 없음. 그래서 authToken을 일부러 넘겨줘야 함! (redux에 있는 것을 얻어서 넘김) */}
                  <img src={`http://localhost:8080/boards/battach/${board.bno}?authToken=${authToken}`} alt="" width="200"/>
                </div>
              }
            </div>
         </div>

          <div>
            <Link to={"/ch09/exam03?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
            <Link to={`/ch09/exam03/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </>
      }
    </div>
  </div>
  );
}

export default BoardRead;