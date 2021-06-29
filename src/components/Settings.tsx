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
      <div className="themes">
        <p>Theme</p>
        <div className="theme-options">
          <div className="theme-opc">
            <div className="theme-white">
              <div className="theme-blue"></div>
            </div>
          </div>
          <div className="theme-opc">
            <div className="theme-white">
              <div className="theme-blue"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mine-type">
        <p>Mine</p>
      </div>
      <div className="levels">
        <p>Level</p>
      </div>
    </section>
  )
}

export default Settings
