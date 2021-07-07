const Records = ({
  showRecords,
  handleShowRecords,
}: {
  showRecords: string
  handleShowRecords: any
}) => {
  return (
    <section className={`records-wrapper ${showRecords}`}>
      <section className="records">
        <div className="records-close" onClick={handleShowRecords}>
          <i className="close fas fa-times"></i>
        </div>
        <div className="records-title">
          <p>🏆 Records 🏆</p>
        </div>
        <table className="records-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>---</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>---</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>---</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>---</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>---</td>
              <td>00:00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default Records
