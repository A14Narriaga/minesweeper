import { useState } from "react"
import "../sass/App.scss"
import Timer from "./Timer"
import Face from "./Face"
import Board from "./Board"
import Social from "./Foot"
import Settings from "./Settings"
import Records from "./Records"
import HowToPlay from "./HowToPlay"

const App = () => {
  const [showSettings, setShowSettings] = useState("hidde")
  const [showRecords, setShowRecords] = useState("hidde")
  const [showHowToPlay, setShowHowToPlay] = useState("hidde")
  // const [showColorPicker, setShowColorPicker] = useState("hidde")
  // const [theme, setTheme] = useState("white")
  // const [colorTheme, setColorTheme] = useState("blue")
  type faceTypes = "😄" | "🤔" | "😎" | "😥"
  const [face, setFace] = useState<faceTypes>("😄")
  const [mine, setMine] = useState("fa fa-virus")

  const handleShowSettings = () => setShowSettings(s => (s === "hidde" ? "" : "hidde"))
  const handleShowRecords = () => setShowRecords(r => (r === "hidde" ? "" : "hidde"))
  const handleShowHowToPlay = () => setShowHowToPlay(h => (h === "hidde" ? "" : "hidde"))

  return (
    <>
      <Timer
        handleShowSettings={handleShowSettings}
        handleShowRecords={handleShowRecords}
        handleShowHowToPlay={handleShowHowToPlay}
      />
      <Face face={face} />
      <Board mine={mine} setFace={setFace} />
      <Social />
      <Settings
        showSettings={showSettings}
        handleShowSettings={handleShowSettings}
        mine={mine}
        setMine={setMine}
      />
      <Records showRecords={showRecords} handleShowRecords={handleShowRecords} />
      <HowToPlay showHowToPlay={showHowToPlay} handleShowHowToPlay={handleShowHowToPlay} />
    </>
  )
}

export default App
