import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/index.jsx";
import Home from "./pages/Home";
import DetailVideo from "./pages/Video";
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" index element={<Home/>} /> */}
          <Route path="/" element={<Layouts />} >
            <Route index={true} path="/" element={<Home />} />
            <Route path="/detail/:id" element={<DetailVideo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
