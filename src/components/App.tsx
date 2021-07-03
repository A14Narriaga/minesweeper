import { useState } from "react"
import "../sass/App.scss"
import Timer from "./Timer"
import Controls from "./Controls"
import Board from "./Board"
import Social from "./Foot"
import Settings from "./Settings"

const App = () => {
  const [showSettings, setShowSettings] = useState("hidde")
  const [mine, setMine] = useState("virus")

  const handleShowSettings = () => setShowSettings(s => (s === "hidde" ? "" : "hidde"))

  return (
    <>
      <Timer handleShowSettings={handleShowSettings} mine={mine} />
      <Controls />
      <Board mine={mine} />
      <Social />
      <Settings
        handleShowSettings={handleShowSettings}
        showSettings={showSettings}
        mine={mine}
        setMine={setMine}
      />
    </>
  )
}

export default App
