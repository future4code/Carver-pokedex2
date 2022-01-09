import Router from './Router/Router';
import GlobalState from './Context/GlobalContext/GlobalState';
import { AppDiv } from './App-styled';

function App() {
  return (
    <AppDiv>
      <GlobalState>
        <Router/>
      </GlobalState>
    </AppDiv>
  );
}

export default App;
