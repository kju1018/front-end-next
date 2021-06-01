import React from "react";

class ComBClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }

  addNumber1 = (event) => {
    this.setState({ //직접적으로 상태 값으로 주는 것도 있을 것
      number: this.state.number  + 1
    });
    this.setState({
      number: this.state.number + 1
    });
  };

  addNumber2 = (event) => { //콜백 함수를 제공해주는 것이 성능 향상을 위해 함수를 실행해서 새로운 상태 값을 리턴하도록 하는 것 잘 알아두기!!
    this.setState((prevState) => { //이거 실행하는 것은 동기로 실행 (매개 값으로 현재 상태 값을 받음)
      return{
        number: prevState.number + 1 //새로운 상태값 리턴
      }
    });
    this.setState((prevState) => { 
      return{
        number: prevState.number + 1 
      }
    });
  };

  render() {
    return(
      <div class="card">
          <div class="card-header">
            ComBClass
          </div>
          <div class="card-body">
            <h3 style={{color:this.state.color}}>{this.state.number}</h3> 
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber1}>숫자 증가</button>
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber2}>숫자 증가</button>
          </div>
      </div>
    );
  }
}

export default ComBClass;