import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Digital from "./pages/Digital";
import Detail from "./pages/Detail";
import About from "./pages/About";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import './styles/App.css'

function App() {

  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/photo" element={<Photo />}/>
        <Route path="/digital" element={<Digital />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cv" element={<CV />}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
