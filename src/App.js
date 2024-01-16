import './App.css';
import FormComponens from './component/FormComponens';

function App() {
  function adatKuld(adatObj){
    console.log(adatObj)


  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>Űrlap használata</h1>
      </header>
      <article>
      <FormComponens adatKuld={adatKuld} />
      </article>
    </div>
  );
}

export default App;
