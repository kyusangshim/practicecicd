import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Dday from './Dday';
import TimeTrans from './TimeTrans';
import Loginmode from './Loginmode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <a href='/dday'>1번으로 이동</a> /&nbsp;
        <Link to='/timetrans'>2번으로 이동</Link> /&nbsp;
        <NavLink to='/loginmode'>3번으로 이동</NavLink>

        <Routes>
            <Route path="/dday" element={<Dday />} />
            <Route path="/timetrans" element={<TimeTrans />} />
            <Route path="/loginmode" element={<Loginmode />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;