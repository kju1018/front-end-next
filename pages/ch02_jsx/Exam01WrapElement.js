function Exam01WrapElement(props) {
  return(
    //최상위 컴포넌트는 하나어야 한다! div로 하기 싫다면? <></>이걸로 작성하기!
    <div className="card">
      <div className="card-header">
        Exam01WrapElement
      </div>
      <div className="card-body">
          content...
      </div>
    </div>
  );
}
export default Exam01WrapElement;
