import axios from "axios";
import qs from "qs";

export function getBoardList(pageNo=1){ //pageNo 디폴트 값으로 1줬음.
  const promise = axios.get("boards", {params: {pageNo:pageNo}}); //pageNo:pageNo 같으니까 생략하고 pageNo으로 작성가능
  return promise;
}

export function createBoardNoAttach(board) { //첨부가 없을 때 게시물을 생성하는 함수
  const promise = axios.post("boards", board);   //{"btitle":"제목1", "bcontent":"내용1", ...} (객체를 그대로 전달하면 이렇게 넘어감)
  //const promise = axios.post("boards", qs.stringify(board)); //btitle=제목1&bcontent=내용1&... (쿼리스트링방식)
  return promise;
}

export function createBoard(multipartFormData) {
  return axios.post("/boards", multipartFormData); 
}

export function readBoard(bno) {
  return axios.get("/boards/" + bno);
}

export function deleteBoard(bno) {
  return axios.delete("/boards/" + bno);
}

export function updateBoard(board) {
  return axios.put("/boards", board); //{"btitle":"xxx", "bcontent":"yyy", "bwriter":"zzz"}
}

export function downloadAttach(bno) {
  return axios.get("/boards/battach/" + bno, {responseType: "blob"}); //내가 받는 것이 이미지다!
}  
//axios가 이렇게 지정을하면 파싱을함
//이렇게 지정안하면 문자인줄알고 파싱하는데 지정하면 파싱안하고 그대로 전달
//생략되면 json타입이면 자바스크립트 타입으로 자동으로 만들어줌
//이걸 지정해주면 데이터를 가공하지 않고 response에 심어서 전달?
//이미지 타입을 받을때는 responseType을 명시해야함