import { useState } from "react"

const Settings = ({
  handleShowSettings,
  showSettings,
  mine,
  setMine,
}: {
  handleShowSettings: any
  showSettings: string
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

  return (
    <section className={`settings ${showSettings}`}>
      <div className="modal-btns">
        <i className="help far fa-question-circle"></i>
        <i onClick={handleShowSettings} className="close fas fa-times"></i>
      </div>
      <div className="title">
        <p>Settings</p>
      </div>
      <div className="setting">
        <p>Theme</p>
        <div className="options">
          <button className="opc opc-selected">
            <div className="theme-white">
              <div className="theme-blue" />
            </div>
          </button>
          <button className="opc">
            <div className="theme-white">
              <div className="theme-red" />
            </div>
          </button>
        </div>
      </div>
      <div className="setting">
        <p>Mine</p>
        <div className="options">
          <button onClick={() => setMine("virus")} className="opc">
            <i className={`fa fa-virus`} />
          </button>
          <button onClick={() => setMine("paw")} className="opc opc-selected">
            <i className="fas fa-paw" />
          </button>
          <button onClick={() => setMine("bahai")} className="opc">
            <i className="fas fa-bahai" />
          </button>
        </div>
      </div>
      <div className="level-setting">
        <p>Level</p>
        <button className="level-opc">
          <p>
            Easy - 10x10 <i className={`fa fa-${mine}`}> 10</i>
          </p>
        </button>
        <button className="level-opc opc-selected">
          <p>
            Normal - 16x16 <i className={`fa fa-${mine}`}> 40</i>
          </p>
        </button>
        <button className="level-opc">
          <p>
            Hard - 16x30 <i className={`fa fa-${mine}`}> 99</i>
          </p>
        </button>
        <button className="level-opc">
          <p>
            Custom - {`${width}x${height}`} <i className={`fa fa-${mine}`}>{` ${mines}`}</i>
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
              <i className={`fa fa-${mine}`}></i>
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
  )
}

export default Settings
