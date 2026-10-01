let boxes=document.querySelectorAll(".box");
let res=document.querySelectorAll(".reset");
let newgamebtn=document.querySelector(".new-btn");
let msgcn=document.querySelector(".msgcn");
let msg=document.querySelector(".msg");
let drawcn=document.querySelector(".drawcn");
let draw=document.querySelector(".draw");

let turn0=true;

const arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>{
    turn0=true;
    enabledboxes();
    msgcn.classList.add("hide");
    drawcn.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});


const disabledboxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}

const enabledboxes=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
}

const showwinner=(winner)=>{
   msg.innerText=`Congratulations winner is ${winner} 💥🎉🎉` ;
   msgcn.classList.remove("hide");
   disabledboxes();
}


const printdraw=()=>{
    draw.innerText=`Game is Draw!!😭`;
    drawcn.classList.remove("hide");
    disabledboxes();

}


const checkwinner=()=>{
    for(let i of arr){
            let pos1=boxes[i[0]].innerText;
            let pos2=boxes[i[1]].innerText;
            let pos3=boxes[i[2]].innerText;
                if(pos1!=="" && pos1===pos2 && pos2===pos3){
                    console.log("winner",pos1);
                    showwinner(pos1);
                    return;
                }
    }
    let isdraw=true;
    for(let box of boxes){
        if(box.innerText===""){
            isdraw=false;
            break;
        }
    }
    if(isdraw){
        printdraw();
    }
}


newgamebtn.addEventListener("click",resetgame);
res.forEach((btn)=>{
    btn.addEventListener("click",resetgame);
});

