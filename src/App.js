import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Projects from './components/Projects';
import SinglePage from './components/Projects/SinglePage';
import Error from './components/Error';
import './App.scss';
import Blog from './components/Blog';
import HundredDaysChallenge from './components/HundredDaysChallenge';
import Training from './components/Training';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id"  element={<SinglePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/challenges/:id" element={<HundredDaysChallenge />} />
        <Route path="blog/trainings/:id" element={<Training />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
