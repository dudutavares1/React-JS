import React from 'react';
import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (
      <section>
        <form>
          <input type="text" placeholder="titulo"></input>
          <textarea placeholder="Escreva sua Nota... "></textarea>
          <button>Criar Nota</button>
        </form>
  <ListaDeNotas />
      </section>
  );
}

export default App;
