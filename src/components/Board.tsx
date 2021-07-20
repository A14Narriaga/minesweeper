import { useReducer } from "react"

type cell = { cover: boolean | ""; type: "mine" | number | "" }

// Referenicas en JS
const generateBoard = ({ rows, cols }: { rows: number; cols: number }) => {
  const board = Array.from(Array(rows)).map(() =>
    Array.from(Array(cols)).map(_ => ({ cover: true, type: "" } as cell))
  ) as Array<Array<cell>>
  const randomCell = (): { row: number; col: number } => {
    return { row: Math.floor(Math.random() * rows), col: Math.floor(Math.random() * cols) }
  }
  for (let i = 0; i < 10; i++) {
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
    const unconverBoard = (i: number, j: number) => {
      if (newBoard[i]?.[j]?.cover) {
        newBoard[i][j].cover = false
        if (newBoard[i]?.[j]?.type === "") {
          const movesAxis = [-1, 0, 1]
          for (const dx of movesAxis) {
            for (const dy of movesAxis) {
              if (newBoard[i + dx]?.[j + dy]?.type === "") unconverBoard(i + dx, j + dy)
              else if (newBoard[i + dx]?.[j + dy]?.type === "mine") continue
              else {
                if (newBoard[i + dx]?.[j + dy]?.cover) newBoard[i + dx][j + dy].cover = false
              }
            }
          }
        }
      }
    }
    unconverBoard(i, j)
    return newBoard
  }
  return board
}

const Board = ({ mine, setFace }: { mine: string; setFace: any }) => {
  const [board, dispatchBoard] = useReducer(reducer, [], () =>
    generateBoard({ rows: 10, cols: 10 })
  )

  const startGame = (i: number, j: number) => {
    setFace("🤔")
    dispatchBoard({ type: "setCover", i, j })
  }

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
            onClick={() => startGame(i, j)}
            className={`box box-${cover ? "" : "uncover"}`}
          >
            {!cover ? (
              type === "mine" ? (
                <i className={mine}></i>
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
