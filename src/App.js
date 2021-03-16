import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Particles from 'react-particles-js'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Particles 
        params={{
          partciles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1200
              }
            },            
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
      }}
      />
      <Navbar />  
      <Header />   
      <AboutMe /> 
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
