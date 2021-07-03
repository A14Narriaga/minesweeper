import { useReducer } from "react"

type cell = { cover: boolean | ""; type: "mine" | number | "" }

// Referenicas en JS
const generateBoard = ({ rows, cols }: { rows: number; cols: number }) => {
  const board = Array.from(Array(rows)).map(() =>
    Array.from(Array(cols)).map(_ => ({ cover: true, type: "" } as cell))
  ) as Array<Array<cell>>
  return board
}

type setCover = { type: "setCover"; i: number; j: number }

const reducer = (board: Array<Array<cell>>, accion: setCover) => {
  const { type, i, j } = accion
  if (type === "setCover") {
    const newBoard = [...board]
    newBoard[i][j].cover = false
    newBoard[i][j].type = "mine"
    console.log(i, j)
    return newBoard
  }
  return board
}

const Board = ({ mine }: { mine: string }) => {
  const [board, dispatchBoard] = useReducer(reducer, [], () => generateBoard({ rows: 10, cols: 10 }))

  return (
    <section
      className="board"
      style={{
        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
        width: `${2*board.length+(board.length-1)*0.05+1}rem`,
        height: `${2*board[0].length+(board[0].length-1)*0.05+1}rem`,
      }}
    >
      {board.map((row, i) =>
        row.map(({ cover, type }, j) => (
          <button
            key={`${i}${j}`}
            onClick={() => dispatchBoard({ type: "setCover", i, j })}
            className={`box box-${cover ? "" : "uncover"}`}
          >
            <i className={type === "mine" ? `fa fa-${mine}` : ""}></i>
          </button>
        ))
      )}
    </section>
  )
}

export default Board
