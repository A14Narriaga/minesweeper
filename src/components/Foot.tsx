import Data from "../data.json";

const Social = () => {
  return (
    <section className="foot">
      <div className="by">
        <p>By Alan Arriaga</p>
      </div>
      <section className="social">
        <a href={Data.link.GITHUB}><i className="fab fa-github"></i></a>
        <a href={Data.link.WEBSITE}><i className="fas fa-user-circle"></i></a>
        <a href={Data.link.TWITTER}><i className="fab fa-twitter"></i></a>
      </section>
    </section>
  )
}

export default Social
