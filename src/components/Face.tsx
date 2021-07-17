const Face = ({ face, setFace }: { face: string; setFace: any }) => {
  return (
    <section className="face-wrapper">
      <hr />
      <button onClick={setFace("😄")} className="face">{face}</button>
      <hr />
    </section>
  )
}

export default Face
