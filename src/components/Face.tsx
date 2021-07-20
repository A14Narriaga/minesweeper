const Face = ({ face }: { face: string }) => {
  return (
    <section className="face-wrapper">
      <hr />
      <button className="face">{face}</button>
      <hr />
    </section>
  )
}

export default Face
