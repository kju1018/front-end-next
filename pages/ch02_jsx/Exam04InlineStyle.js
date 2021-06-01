function Exam04InlineCss(props) {
  const name="리액트";
  const mystyle = {
    backgroundColor:"black", 
    color:"aqua", 
    fontSize:"24px", 
    fontWeight:"bold", 
    padding:8
  };
  return (
    <div className="card">
      <div className="card-header">
        Exam04InlineCss
      </div>
      <div className="card-body">
        {/* <div style="background-color: black, color: aqua">{name}</div>
        jsx는 이것을 혀용안함 반드시 표현식을 써야함 */}
        <div style={{backgroundColor: "black", color: "aqua", fontSize:"24px", fontWeight:"bold", padding:8}}>{name}</div>
        <hr/>
        <div style={mystyle}>{name}</div>     
        {/* {{속성값들}} */}
      </div>
    </div>
  );

}

export default Exam04InlineCss;