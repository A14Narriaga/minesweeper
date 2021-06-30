const Settings = () => {
  return (
    <section className="settings">
      <div className="modal-btns">
        <i className="help far fa-question-circle"></i>
        <i className="close fas fa-times"></i>
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
          <button className="opc">
            <i className="fas fa-virus" />
          </button>
          <button className="opc opc-selected">
            <i className="fas fa-paw" />
          </button>
          <button className="opc">
            <i className="fas fa-bahai" />
          </button>
        </div>
      </div>
      <div className="level-setting">
        <p>Level</p>
        <button className="level-opc">
          <p>
            Easy - 10x10 <i className="fas fa-virus"> 10</i>
          </p>
        </button>
        <button className="level-opc opc-selected">
          <p>
            Normal - 10x10 <i className="fas fa-virus"> 10</i>
          </p>
        </button>
        <button className="level-opc">
          <p>
            Hard - 10x10 <i className="fas fa-virus"> 10</i>
          </p>
        </button>
        <button className="level-opc">
          <p>Custom</p>
          <section className="custom">
            <div className="sider-wrapper">
              <i className="fas fa-arrows-alt-v"></i>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="slider"
                id="myRange"
              ></input>
              <span> 00</span>
            </div>
            <div className="sider-wrapper">
              <i className="fas fa-arrows-alt-h"></i>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="slider"
                id="myRange"
              ></input>
              <span> 00</span>
            </div>
            <div className="sider-wrapper">
              <i className="fas fa-virus"></i>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="slider"
                id="myRange"
              ></input>
              <span> 00</span>
            </div>
          </section>
        </button>
      </div>
    </section>
  )
}

export default Settings
