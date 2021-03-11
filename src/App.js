import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Particles from 'react-particles-js'



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
    </div>
  );
}

export default App;
