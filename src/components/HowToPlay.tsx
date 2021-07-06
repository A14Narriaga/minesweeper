const HowToPlay = ({
  showHowToPlay,
  handleShowHowToPlay,
}: {
  showHowToPlay: string
  handleShowHowToPlay: any
}) => {
  return (
    <section className={`howToPlay-wrapper ${showHowToPlay}`}>
      <section className="howToPlay">
        <div className="howToPlay-close" onClick={handleShowHowToPlay}>
          <i className="close fas fa-times"></i>
        </div>
        <div className="howToPlay-title">
          <p>How to play</p>
        </div>
      </section>
    </section>
  )
}

export default HowToPlay
