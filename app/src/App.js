
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./logo.png")} className="App-logo" alt="logo" />
        <p>
          Mudamos destinos com você! Nascemos de um sonho e muitas inquietações.
          Somos uma solução pensada para reduzir o desperdício de resíduos compostáveis.
          Oferecemos soluções sustentáveis para o reaproveitamento e destinação adequada de resíduos.
          Nós transformamos seu lixo compostável em adubo!
          Acreditamos em um futuro diferente e regenerativo. Queremos refletir juntos e  pensar COLETIVAMENTE!
        </p>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        blog
        </a>
      </header>
    </div>
  );
}

export default App;
