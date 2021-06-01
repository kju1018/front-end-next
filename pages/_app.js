import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from './AppHeader';
import AppMenu from './AppMenu';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'redux/root-reducer';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createSetAuthTokenAction, createSetUidAction } from 'redux/auth-reducer';
import { createStore } from 'redux';
import { addAuthHeader } from "apis/axiosConfig";
 
function App({ Component, pageProps }) {
  const store = createStore(rootReducer, composeWithDevTools());

  useEffect(() => {
      //Redux에 인증 정보 설정
      store.dispatch(createSetUidAction(sessionStorage.getItem("uid") || ""));
      store.dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));
      //Axios에 인증 헤더 추가
       if(sessionStorage.getItem("authToken")){
         addAuthHeader(sessionStorage.getItem("authToken"));
       }
  }, []); //마운트될 때 딱 한번만 실행되면 되니까!



  return (
    <Provider store={store}>
    <div className="d-flex flex-column vh-100">
      <AppHeader />
      <div className="flex-grow-1 container-fluid">
        <div className="row h-100">
          <div className="col-md-6 col-lg-4 p-3 bg-dark">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1" style={{ height: "0px", overflowY: "auto", overflowX: "hidden" }}>
                <AppMenu />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-8 p-3">
            <div className=" h-100 d-flex flex-column">
              <div className="flex-grow-1 overflow-auto pr-3" style={{ height: "0px" }}>
                <Component {...pageProps} /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Provider>
  );
}



//React에서 AppRoute에 해당하는 내용이 <Component {...pageProps} /> ! 변경되는 컴포넌트 내용이 여기 뜸.
export default App
//컴포넌트로 만들어져 있음. 이게 제일 먼저 실행!