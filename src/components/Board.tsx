import { useReducer } from "react"

type cell = { cover: boolean | ""; type: "mine" | number | "" }

// Referenicas en JS
const generateBoard = ({ rows, cols }: { rows: number; cols: number }) => {
  const board = Array.from(Array(rows)).map(() =>
    Array.from(Array(cols)).map(_ => ({ cover: false, type: "" } as cell))
  ) as Array<Array<cell>>
  const randomCell = (): { row: number; col: number } => {
    return { row: Math.floor(Math.random() * rows), col: Math.floor(Math.random() * cols) }
  }
  for (let i = 0; i < 20; i++) {
    const { row, col } = randomCell()
    board[row][col].type = "mine"
  }
  const movesAxis = [-1, 0, 1]
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = board[i][j]
      if (cell.type !== "mine") {
        let virusNear = 0
        for (const dx of movesAxis) {
          for (const dy of movesAxis) {
            if (board[i + dx]?.[j + dy]?.type === "mine") virusNear++
          }
        }
        cell.type = virusNear === 0 ? "" : virusNear
      }
    }
  }
  return board
}

type setCover = { type: "setCover"; i: number; j: number }
const reducer = (board: Array<Array<cell>>, accion: setCover) => {
  const { type, i, j } = accion
  if (type === "setCover") {
    const newBoard = [...board]
    newBoard[i][j].cover = false
    return newBoard
  }
  return board
}

const Board = ({ mine }: { mine: string }) => {
  const [board, dispatchBoard] = useReducer(reducer, [], () =>
    generateBoard({ rows: 10, cols: 10 })
  )

  return (
    <section
      className="board"
      style={{
        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
        width: `${2.05 * board.length + 0.95}rem`,
        height: `${2.05 * board[0].length + 0.95}rem`,
      }}
    >
      {board.map((row, i) =>
        row.map(({ cover, type }, j) => (
          <button
            key={`${i}${j}`}
            onClick={() => dispatchBoard({ type: "setCover", i, j })}
            className={`box box-${cover ? "" : "uncover"}`}
          >
            {!cover ? (
              type === "mine" ? (
                <i className={`fa fa-${mine}`}></i>
              ) : (
                <i className={`num-${type}`}>{type}</i>
              )
            ) : (
              ""
            )}
          </button>
        ))
      )}
    </section>
  )
}

export default Board
