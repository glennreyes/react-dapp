import { Progress } from './Progress';
import { Router } from './Router';
import { Wagmi } from './Wagmi';

function App() {
  return (
    <Wagmi>
      <Progress>
        <Router />
      </Progress>
    </Wagmi>
  );
}

export default App;
