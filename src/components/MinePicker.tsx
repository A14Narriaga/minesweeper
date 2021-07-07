const MinePicker = ({
  showMinePicker,
  handleShowMinePicker,
  setMine,
}: {
  showMinePicker: string
  handleShowMinePicker: any
  setMine: any
}) => {
  const handleMine = (mine: string) => {
    setMine(mine)
    handleShowMinePicker()
  }

  return (
    <section>
      <div className={`mine-picker ${showMinePicker}`}>
        <div className="picker">
          <i onClick={() => handleMine("fa fa-virus")} className="fa fa-virus" />
          <i onClick={() => handleMine("fas fa-bahai")} className="fas fa-bahai" />
          <i onClick={() => handleMine("fas fa-flag")} className="fas fa-flag"></i>
          <i onClick={() => handleMine("fas fa-cog")} className="fas fa-cog"></i>
          <i onClick={() => handleMine("fas fa-paw")} className="fas fa-paw" />
          <i onClick={() => handleMine("far fa-futbol")} className="far fa-futbol"></i>
          <i onClick={() => handleMine("far fa-snowflake")} className="far fa-snowflake"></i>
          <i
            onClick={() => handleMine("fab fa-canadian-maple-leaf")}
            className="fab fa-canadian-maple-leaf"
          ></i>
          <i onClick={() => handleMine("fab fa-battle-net")} className="fab fa-battle-net"></i>
        </div>
      </div>
    </section>
  )
}

export default MinePicker
