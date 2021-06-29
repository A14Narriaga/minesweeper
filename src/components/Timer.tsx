const Timer = () => {
  return (
    <section className="timer-wrapper">
      <p className="virus-count">
        <i className="fas fa-virus"> 01</i>
      </p>
      <button className="clock">00:00</button>
      <button className="settings-btn">
        <i className="fas fa-sliders-h"></i>
      </button>
    </section>
  )
}

export default Timer
