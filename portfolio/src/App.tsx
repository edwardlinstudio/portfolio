import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Computing from "./pages/Computing";
import Detail from "./pages/Detail";
import About from "./pages/About";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import './styles/App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/photo" element={<Photo />}/>
          <Route path="/computing" element={<Computing />}/>
          <Route path="/detail" element={<Detail />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cv" element={<CV />}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App