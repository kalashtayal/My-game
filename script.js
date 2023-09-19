console.log('WELCOME TO TIC TAC TOE')

let turn = "X"
let gameover = false;

//function to change the turn

const changeTurn = () => {
    return turn === "X" ?("0" ):("X") ;

}
//function to check win

const checkWin = () => {
    let boxtext = document.querySelectorAll('.boxtext');

    function clear() {
        boxtext.forEach((b) => {
            b.innerText = "";
           
        });

        if (turn == "0") {
            changeTurn();
        }
        
    }
    
    
    document.querySelector(".reset").addEventListener("click", ()=>{
        clear();
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width="0px";
        document.querySelector('.info').innerHTML = "Turn on X";
 
    });
 
    
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach((e) => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "") && (boxtext[e[1]].innerText !== "") && (boxtext[e[2]].innerText !== "")
        ) {
            console.log(boxtext[e[0]].innerText);

            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + " " + "Won";
             gameover=true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width="200px";
            
        }

    });

}



//game logic

let boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
if(!gameover){
    document.getElementsByClassName('info')[0].innerText = "Turn on "+turn;
}

        }
    })
})