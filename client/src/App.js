import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./views/Login"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<div>hello root</div>}/>
        <Route path = "/hello" element = {<div>componenta 2</div>}/>
        <Route path = "/auth/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App