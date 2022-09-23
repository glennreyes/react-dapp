export function HomePage() {
  return (
    <>
      <h4 className="text-primary">Welcome to the</h4>
      <h1>React Dapp Workshop! ☀️ 🇪🇸</h1>
      <p>
        In this workshop we will be working on a simple Dapp using React and
        Ethereum. We will walk through various exercises starting by getting an
        overview of the stack.
      </p>
      <p>
        After we feel comfortable working with the stack, we will be compiling
        Ethereum smart contracts and deploy them to a local Ethereum Virtual
        Machine (EVM). We will then interact with the contracts on the Ethereum
        blockchain using a React app.
      </p>
      <h2>The tech stack</h2>
      <ul>
        <li>
          <code>app/</code>: React application using{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            Vite
          </a>
        </li>
        <li>
          <code>protocol/</code>: Ethereum development environment using{' '}
          <a href="https://hardhat.org" target="_blank" rel="noreferrer">
            Hardhat
          </a>
        </li>
      </ul>
      <h2>Useful commands</h2>
      {/* TODO */}
      <p>
        To get started with the first exercise, proceed by clicking the button
        below:
      </p>
    </>
  );
}
