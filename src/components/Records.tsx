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
        <div className="records-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </table>
        </div>
      </section>
    </section>
  )
}

export default Records
