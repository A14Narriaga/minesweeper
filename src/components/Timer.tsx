const Timer = ({ handleShowSettings, mine }: { handleShowSettings: any; mine: string }) => {
  return (
    <section className="timer-wrapper">
      <p className="virus-count">
        <i className={`fa fa-${mine}`}> 01</i>
      </p>
      <button className="clock">00:00</button>
      <button className="settings-btn" onClick={handleShowSettings}>
        <i className="fas fa-sliders-h"></i>
      </button>
    </section>
  )
}

export default Timer
