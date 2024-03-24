import Teams from './components/ContactForm';
import About from './routes/About';
import Home  from './routes/Home';
import Service from './routes/Service';
import TeamsUs from './routes/Teams';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/teams" element={<TeamsUs />} />
        
    </Routes>
    </>
  )
}

export default App
