import { useState } from "react"
import "../sass/App.scss"
import Timer from "./Timer"
import Controls from "./Controls"
import Board from "./Board"
import Social from "./Foot"
import Settings from "./Settings"

const App = () => {
  const [showSettings, setShowSettings] = useState("hidde")

  const handleShowSettings = () => setShowSettings(s => (s === "hidde" ? "" : "hidde"))

  return (
    <>
      <Timer handleShowSettings={handleShowSettings} />
      <Controls />
      <Board />
      <Social />
      <Settings handleShowSettings={handleShowSettings} showSettings={showSettings} />
    </>
  )
}

export default App
