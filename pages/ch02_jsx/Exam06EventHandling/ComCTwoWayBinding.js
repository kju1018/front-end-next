import { useState } from "react";

function ComCTwoWayBinding(props) {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setContent(event.target.value); //set함수에 매개값 넣으면 값 저장
  };

  return(
    <div className="card">
      <div className="card-header">
        ComCTwoWayBinding
      </div>
      <div className="card-body">
        <div>
          입력1: <input type="text" onChange={handleChange} value={content}/>
        </div>
        <div>
          입력2: <input type="text" onChange={handleChange} value={content}/> {/*value안에 디폴트 값*/}
        </div>
      </div>
    </div>
  );
}

export default ComCTwoWayBinding;