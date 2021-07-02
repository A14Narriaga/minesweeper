const Board = ({mine}:{mine:string}) => {

    const changeVisibility = (id: string) => {
        const btn = document.getElementById(id);
        if(btn) {
            btn.classList.add("visible");
            btn.innerHTML = '<i class="fa fa-'+mine+'"></i>';
        }
    }

    return (
        <section className="board">
            <button id="0" onClick={() => changeVisibility("0")} className="box"></button>
            <button id="1" onClick={() => changeVisibility("1")} className="box"></button>
            <button id="2" onClick={() => changeVisibility("2")} className="box"></button>
            <button id="3" onClick={() => changeVisibility("3")} className="box"></button>
            <button id="4" onClick={() => changeVisibility("4")} className="box"></button>
            <button id="5" onClick={() => changeVisibility("5")} className="box"></button>
            <button id="6" onClick={() => changeVisibility("6")} className="box"></button>
            <button id="7" onClick={() => changeVisibility("7")} className="box"></button>
            <button id="8" onClick={() => changeVisibility("8")} className="box"></button>
        </section>
    )
}

export default Board
