import "../sass/App.scss"
import Timer from "./Timer"
import Controls from "./Controls"
import Board from "./Board"
import Social from "./Foot"
import Settings from "./Settings"

const App = () => {
  return (
    <>
      <Timer />
      <Controls />
      <Board />
      <Social />
      <Settings />
    </>
  )
}

export default App
