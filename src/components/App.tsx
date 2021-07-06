import { useState } from "react"
import "../sass/App.scss"
import Timer from "./Timer"
import Controls from "./Face"
import Board from "./Board"
import Social from "./Foot"
import Settings from "./Settings"
import Records from "./Records"

const App = () => {
  const [showSettings, setShowSettings] = useState("hidde")
  const [mine, setMine] = useState("virus")

  const handleShowSettings = () => setShowSettings(s => (s === "hidde" ? "" : "hidde"))

  return (
    <>
      <Timer handleShowSettings={handleShowSettings} />
      <Controls />
      <Board mine={mine} />
      <Social />
      <Settings
        handleShowSettings={handleShowSettings}
        showSettings={showSettings}
        mine={mine}
        setMine={setMine}
      />
      <Records></Records>
    </>
  )
}

export default App
