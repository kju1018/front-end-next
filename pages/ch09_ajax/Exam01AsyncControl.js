import { useState } from "react";

function delayPromise(time) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success"); //성공적으로 실행 완료되었다
    }, time); //매개값으로 주어진 time이 지난 후에 이게 실행하도록 만들어 놓은 것
  });
  return promise; //주어진 시간동안 작업을 하고, 작업이 끝나면 완료된 promise를 리턴함
}

function Exam01AsyncControl(props) { 
  const [loading, setLoading] = useState(false);

  // const handleRequest = (event) => {
  //   setLoading(true);
  //   delayPromise(3000)//3000은 3초를 의미함. 얘가 promise를 리턴함
  //   .then(result => {})
  //   .catch(error => {})
  //   .finally(() => {
  //     setLoading(false); //왜 finally에? 성공적으로 수행했던 아니던 꼭 false로 바꿔줘야 함!
  //   })
  // };

  const handleRequest = async (event) => {
    setLoading(true);
   try {
    const result = await delayPromise(3000);
   } catch(error) {
    console.log(error);
   } finally {
    setLoading(false);
   }
  };

  return(
    <div className="card">
      <div className="card-header">
        Exam01AsyncControl
      </div>
      <div className="card-body">
        <button className="btn btn-primary btn-sm mr-2" onClick={handleRequest}>데이터 요청</button>
        <div className="mt-3">
          {loading? 
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">로딩 중...</span>
            </div>
            :
            <div>로딩 완료</div>
          } {/* loading이 true가 되면 뭔가 하고 있다는 것 -> 로딩중이 출력*/}
          {/* loading은 상태 데이터로 만들어야 함. 왜? 로딩중에 리렌더링 됐을때 로딩 정보가 없어지면 안되기때문에 */}
        </div>
      </div>
    </div>
  );
}

export default Exam01AsyncControl;