import "./style/style.css"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer";
import SubContainer from "./components/SubContainer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Header></Header>
         {/*라우트 설정 */}
        <Routes>
           <Route path="/" element={<MainContainer></MainContainer>}></Route>
           <Route path="/sub" element={<SubContainer></SubContainer>}></Route>
        </Routes>
    </div>
  );
}

export default App;
