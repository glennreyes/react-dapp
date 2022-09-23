import { Router } from './Router';
import { Wagmi } from './Wagmi';

function App() {
  return (
    <Wagmi>
      <Router />
    </Wagmi>
  );
}

export default App;
