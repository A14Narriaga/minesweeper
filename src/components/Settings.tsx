import { useState } from "react"
import MinePicker from "./MinePicker"

const Settings = ({
  showSettings,
  handleShowSettings,
  mine,
  setMine,
}: {
  showSettings: string
  handleShowSettings: any
  mine: string
  setMine: any
}) => {
  const minWidth = 10
  const minHeight = 10
  const minMines = 1
  const [width, setWidth] = useState(minWidth)
  const [height, setHeight] = useState(minHeight)
  const [mines, setMines] = useState(minMines)
  const maxMines = (width * height) / 2

  const [showMinePicker, setShowMinePicker] = useState("hidde")
  const handleShowMinePicker = () => setShowMinePicker(mp => (mp === "hidde" ? "" : "hidde"))

  return (
    <section className={`settings-wrapper ${showSettings}`}>
      <section className="settings">
        <div className="modal-btns">
          <i onClick={handleShowSettings} className="close fas fa-times"></i>
        </div>
        <div className="title">
          <p>Settings</p>
        </div>
        <div className="setting">
          <section className="option">
            <p>Theme</p>
            <button className="opc-btn">
              <div className="theme-white">
                <div className="theme-blue" />
              </div>
            </button>
          </section>
          <section className="option">
            <p>Mine</p>
            <button className="opc-btn" onClick={handleShowMinePicker}>
              <i className={mine} />
            </button>
            <MinePicker
              showMinePicker={showMinePicker}
              handleShowMinePicker={handleShowMinePicker}
              setMine={setMine}
            />
          </section>
        </div>
        <div className="level-setting">
          <p>Level</p>
          <button className="level-opc">
            <p>
              Easy - 10x10 <i className={mine}> 10</i>
            </p>
          </button>
          <button className="level-opc opc-selected">
            <p>
              Normal - 16x16 <i className={mine}> 40</i>
            </p>
          </button>
          <button className="level-opc">
            <p>
              Hard - 16x30 <i className={mine}> 99</i>
            </p>
          </button>
          <button className="level-opc">
            <p>
              Custom - {`${width}x${height}`} <i className={mine}>{` ${mines}`}</i>
            </p>
            <section className="custom">
              <div className="sider-wrapper">
                <i className="fas fa-arrows-alt-v"></i>
                <input
                  type="range"
                  min={minWidth}
                  max="50"
                  step="1"
                  onChange={e => {
                    setWidth(w => Number(e.target.value))
                    setMines(m => (m <= maxMines ? m : maxMines))
                  }}
                  value={width}
                  className="slider"
                ></input>
              </div>
              <div className="sider-wrapper">
                <i className="fas fa-arrows-alt-h"></i>
                <input
                  type="range"
                  min={minHeight}
                  max="50"
                  onChange={e => {
                    setHeight(h => Number(e.target.value))
                    setMines(m => (m <= maxMines ? m : maxMines))
                  }}
                  value={height}
                  className="slider"
                ></input>
              </div>
              <div className="sider-wrapper">
                <i className={mine}></i>
                <input
                  type="range"
                  min={minMines}
                  max={maxMines}
                  onChange={e => setMines(m => Number(e.target.value))}
                  value={mines}
                  className="slider"
                ></input>
              </div>
            </section>
          </button>
        </div>
      </section>
    </section>
  )
}

export default Settings
