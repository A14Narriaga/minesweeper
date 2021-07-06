const Timer = ({
  handleShowSettings,
  handleShowRecords,
  handleShowHowToPlay,
}: {
  handleShowSettings: any
  handleShowRecords: any
  handleShowHowToPlay: any
}) => {
  return (
    <section className="timer-wrapper">
      <button className="timer-btn" onClick={handleShowHowToPlay}>
        <i className="help far fa-question-circle"></i>
      </button>
      <button className="clock" onClick={handleShowRecords}>00:00</button>
      <button className="timer-btn" onClick={handleShowSettings}>
        <i className="fas fa-sliders-h"></i>
      </button>
    </section>
  )
}

export default Timer
