let boxes=document.querySelectorAll(".box");
let mov="O";
let rstbutton=document.querySelector(".reset");
let countselect=0;
const winpattern=[[0,1,2],[3,4,5],[6,7,8]
,[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//console.log(boxes);

rstbutton.addEventListener("click",()=>{
    countselect=0;
    let gameScreen=document.querySelector(".game");
    let resultScreen=document.querySelector(".result");
    gameScreen.style.display="flex";
    resultScreen.style.display="none";
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
})

const displaymessage=(winner)=>{
    let gameScreen=document.querySelector(".game");
    let resultScreen=document.querySelector(".result");
    gameScreen.style.display="none";
    resultScreen.style.display="block";
    if(winner==="no_one"){
        resultScreen.innerHTML=`<h1>The game is drawn</h1>`;
    }
    else{
        resultScreen.innerHTML=`<h1>The Winner is ${winner}</h1>`;
    }
}  

const check=(winner)=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log(`WInner is: ${winner}`);
                displaymessage(winner);
            }
            else if(countselect==9){
                console.log(countselect);
                displaymessage("no_one");
            }
        }
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        countselect+=1;
        box.innerText=mov;
        let m=mov;
        box.disabled=true;
        if(mov==="O"){
            mov="X";
        }
        else{
            mov="O";
        }
        check(m);
    })
})
