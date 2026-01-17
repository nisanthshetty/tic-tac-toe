let boxes=document.querySelectorAll('.box');
let reset = document.getElementById('reset');
let msg = document.querySelector('.winner');
let newgame = document.querySelector('.newgame');
let msgcont = document.querySelector('.msg');
let turn = document.querySelector('.turn');
let turnO = true;//we track the turn of player x and o
const winning=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO==true){
            //player O
            box.innerText="O";
            turnO=false;
        }else{
            //player X 
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        updateturns();
    });
});

updateturns=()=>{
let currentturn=turnO?"O":"X";
turn.innerText=`Turn: ${currentturn}`;
}
// updateturns();

function resetGame(){
boxes.forEach((box)=>{
    box.innerText="";
    box.disabled=false;
});

}
function removenewbtn(){
    msgcont.classList.add("hide");
}
reset.addEventListener("click",resetGame);
newgame.addEventListener("click",()=>{
    resetGame();
    removenewbtn();
});

showWinner=(winner)=>{
msg.innerText=`Congratulation Winner is ${winner}`;
msgcont.classList.remove("hide");
}
const checkWinner=()=>{
    for (let pattern of winning){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!=''&& pos3!=''){
            let flag = false;
            if(pos1==pos2&& pos2==pos3){
                console.log("winner",pos1);
                flag = true;
                showWinner(pos1);
            }
            if(flag==true){
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
            }
        }
    }
};
