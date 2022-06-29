
import './App.css';

function App() {
  return (
    <div class="container mx-auto px-4 bg-sky-50">
      <header class="">
        <img src={require("./logo.png")} class="" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > blog </a>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Store</a>
      </header>
      <div className="product" class=" flex flex-row rounded px-14 py-8 bg-sky-400 justify-center">
        <h1>KIT COMPOSTEIRA</h1> 
        <p class="m-8 px-10">composteira pronto para uso
          </p>
        <img src={require("./compost-W7FTP8A.png")} class="h-96" alt="logo" />
      </div>
      <div className="about" class="bg-sky-800 ">
        <img src={require("./Component 19 – 1.png")} class="" alt="folha" />
        <p class="m-8">Mudamos destinos com você!Nascemos de um sonho e muitas inquietações.
          Somos uma solução pensada para reduzir o desperdício de resíduos compostáveis.
          Oferecemos soluções sustentáveis para o reaproveitamento e destinação adequada de resíduos.
          Nós transformamos seu lixo compostável em adubo!
          Acreditamos em um futuro diferente e regenerativo. Queremos refletir juntos e  pensar COLETIVAMENTE!
          </p>
      </div>
    </div>
  );
}

export default App;
