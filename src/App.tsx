import { h } from "preact";

const App = ({ name }: { name: string }): JSX.Element => {
  return <div>Hey {name}, say hello to TypeScript.</div>;
};

export default App;
