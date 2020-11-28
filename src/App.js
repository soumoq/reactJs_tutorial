import './App.css';
import Message from './components/Message';
import Counter from './components/Counter'
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
     <Greet name="soumo" type = "Jystu" children="Test"/>
    <Welcome name="jsx"></Welcome>
    </div>
  );
}

export default App;
