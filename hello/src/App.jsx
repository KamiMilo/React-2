import './App.css';
//importa o componente (Title) criado da pasta title
import Title from "./componentes/Title/title";
import CardEvento from "./componentes/Card-eventos/card-eventos";
import Contador from './componentes/Contador/Contador';
import Container from './componentes/Container/container';
import Rotas from './routes';


function App() {
  return (
    <div className="App">
      {/* <h1>hello world!</h1> */}

      <Rotas />

      {/* componente */}
      {/* <Title nome="kamille" sobrenome="milo" />
      <br /> */}
      {/* <Container>
        <CardEvento titulo="sql-server" texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nemo eligendi, recusandae dicta possimus nihil voluptatum rem saepe unde tenetur maxime neque quia enim fugiat. Dolor doloribus aperiam doloremque assumenda?" textolink="conectar" />
        <CardEvento titulo="sql-server" texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nemo eligendi, recusandae dicta possimus nihil voluptatum rem saepe unde tenetur maxime neque quia enim fugiat. Dolor doloribus aperiam doloremque assumenda?" textolink="conectar" />
        <CardEvento titulo="sql-server" texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nemo eligendi, recusandae dicta possimus nihil voluptatum rem saepe unde tenetur maxime neque quia enim fugiat. Dolor doloribus aperiam doloremque assumenda?" textolink="conectar" />
      </Container> */}

      {/* <Container>

        <Contador/>

      </Container> */}
    
    </div>

  );
}

export default App;
