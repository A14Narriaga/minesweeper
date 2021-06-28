import "../sass/App.scss";
import Timer from "./Timer";
import Controls from "./Controls";
import Board from "./Board";
import Social from "./Foot";

const App = () => {
  return (
    <>
      <Timer />
      <Controls />
      <Board />
      <Social />
    </>
  )
}

export default App
