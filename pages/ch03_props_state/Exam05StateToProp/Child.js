function Child(props){
  const changeImage = (event) => {
    props.changeImg();
  };

  return (
    <div class="card">
        <div class="card-header">
          Child
        </div>
        <div class="card-body">
          <button className="btn btn-info btn-sm" onClick={changeImage}>이미지 변경</button>
          <div className="mt-2">
            <img src = {"/resources/img/" + props.img} alt="" width="150"/>
          </div>
        </div>
    </div>
  );
}

export default Child;