import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      <Greet name = "Ram" type = "Student">
        <p>
          Welcome to hell
        </p>
      </Greet>
      <Greet name = "Sam" type = "Hod">
        <button>
          Action
        </button>
      </Greet>
      <Greet name = "Jdu" type = "Teacher"/>

      <Welcome name = "DC"/>
      <Welcome name = "Marvel"/>


    </div>
  );
}

export default App;
