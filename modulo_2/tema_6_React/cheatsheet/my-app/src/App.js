import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';

function App() {
  return (
    <div className="App">
     <FirstComponent title="Título enviado dese el padre" date="16 de agosto del 2025"/> 
     <FirstComponent title="Otro título" date="otra fecha"/> 
     <SecondComponent/>
     <ThirdComponent/>

     

    </div>
  );
}

export default App;
