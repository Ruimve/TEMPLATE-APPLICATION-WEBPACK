
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Sponsors } from './Sponsors';

function App() {
  return (
    <BrowserRouter>
      <Link to="/Sponsors">跳转</Link>
      <Routes>
        <Route path="/Sponsors" element={<Sponsors name="Hello Sponsors!"/>} />
        <Route path="/" element={<Home name="Hello Home!" />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App };