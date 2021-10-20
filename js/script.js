
const selectBox = document.getElementById("select_box");
const btnGame = document.getElementById("start_game");
const cellContainer = document.querySelector(".game_container");

const arrayBombe = [];



btnGame.addEventListener("click", function () {
    cellContainer.innerHTML = "";

    const difficulty = selectBox.value;

    const totalCell = cellsNum(difficulty);

    const cellPerRow = Math.sqrt(totalCell);
    const cellSize = 100 / cellPerRow;

    for (let i = 0; i < totalCell; i++) {
        const cell = document.createElement("div");
        const innerSpan = document.createElement("span");

        cell.classList.add("cell_style");
        cell.classList.add("position_rel");
        cell.style.height = cellSize + "%";
        cell.style.width = cellSize + "%";
        innerSpan.textContent = i + 1;

        innerSpan.classList.add("center_num");

        cellContainer.append(cell);
        cell.append(innerSpan);
        cell.addEventListener("click", cellClick);


        //CODICE CON INNER.HTML
        /* const cell = `<div class="cell_style position_rel" style='width: ${cellSize}%; height: ${cellSize}%'><span class="center_num">${i + 1}</span></div>`;
        cellContainer.innerHTML += cell;
        cell.addEventListener("click", cellClick);
        */

        cell.addEventListener("click", onSingleCellClick);
        // cell.addEventListener("click", () => onSingleCellClick(i + 1, cell));
        /*   cell.addEventListener("click", function () {
            this.classList.toggle("clicked");
        
            console.log("clickata cella #" + (i + 1));
          }); */




    };


    for (j = 0; j < 16; j++) {
        const randomNum = Math.floor(Math.random() * (totalCell - 1 + 1)) + 1;
        const newBomb = randomNum;
        const existNum = arrayBombe.includes(newBomb);


        if (!existNum) {
            arrayBombe.push(newBomb);

        } else {
            j--;
        }
    }
    console.log(arrayBombe);



});











/////////////////////////////////////////////////
//FUNZIONI
///////////

//funzione per stabilire il numero di celle in base alla difficoltà
function cellsNum(difficulty) {

    if (parseInt(difficulty) === 1) {
        let numCell = 100;
        console.log("il numero di celle per la difficoltà selezionata è: " + numCell);
        return numCell;
    }
    if (parseInt(difficulty) === 2) {
        let numCell = 81;
        console.log("il numero di celle per la difficoltà selezionata è: " + numCell);
        return numCell;
    }
    if (parseInt(difficulty) === 3) {
        let numCell = 49;
        console.log("il numero di celle per la difficoltà selezionata è: " + numCell);
        return numCell;
    }


};

//funzione per il click sulla cell
function cellClick() {
    this.classList.add("on_click");
}


//funzione numero random per bomba
function generateNumBomb() {

}




function onSingleCellClick() {

    const currentCell = parseInt(this.textContent);
    console.log("cliccata su cella #" + currentCell);

    if (arrayBombe.includes(currentCell)) {
        this.classList.add("on_bomb");
        alert("Ops... hai trovato una mina");

    } else {
        this.classList.add("on_click");
    }
}


