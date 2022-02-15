import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';
import { Layout } from './components/Layout';
import 'aos/dist/aos.css'; 



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="proyectos" element={<Projects/>}/>
            <Route path="contacto" element={<Contact/>}/>
            <Route path="cursos" element={<Courses/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
