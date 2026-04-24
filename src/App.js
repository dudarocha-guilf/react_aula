import './App.css';

import Header from './componentes/Header';
import styled from 'styled-components';

//constante que guarda os estilos(styled components)
const AppContainer = styled.div`
  height: 100vw;
  width: 100vw;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);

li{
  list-style: none;
}
`

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
