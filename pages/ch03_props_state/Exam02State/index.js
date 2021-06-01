import ComAClass from "./ComAClass";
import ComAFun from "./ComAFun";
import ComBClass from "./ComBClass";
import ComBFun from "./ComBFun";
import ComCFun from "./ComCFun";
import ComCFunWithImmer from "./ComCFunWithImmer";

function Exam02State(props) {
  return (
    <div class="card">
        <div class="card-header">
          Exam02State
        </div>
        <div class="card-body">
          <ComAClass/>
          <ComAFun/>
          <ComBClass/>
          <ComBFun/>
          <ComCFun/>
          <ComCFunWithImmer/>
        </div>
    </div>
  );
}

export default Exam02State;