import './App.css';
import Card from './components/CardComponent';


function App() {
  return (
    <div className="App">
      <Card
      title="Nuevo título de tarjeta"
      paragraph="Lorem ipsum set amet."
      href="https://google.com"
      linkText="Más información"
      imgUrl="https://www.pexels.com/es-es/foto/ruinas-antiguo-sitio-historico-lugares-de-interes-11606102/"
      />
      <Card
      title="Nuevo título de tarjeta"
      paragraph="Lorem ipsum set amet."
      href="https://google.com"
      linkText="Más información"
      imgUrl="https://www.pexels.com/es-es/foto/ruinas-antiguo-sitio-historico-lugares-de-interes-11606102/"
      />
    </div>
  );
}



export default App;
