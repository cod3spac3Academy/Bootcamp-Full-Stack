import './App.css';
//import CardComponentEj1 from './components/CardComponentEj1';


function App() {
  return (
    <div className="App">
      <CardComponentEj1/>
    </div>
  );
}

function CardComponentEj1 (){
  return (
      <Fragment>
      <img src="" className="card"/>
      <div className="card-body">
          <h4 className="card-title"></h4>
          <p className="card-text"></p>
          <button className="card-button"></button>
      </div>

      </Fragment>
  )
}

export default App;
