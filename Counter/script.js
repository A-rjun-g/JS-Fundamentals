/*
document.getElementById("decreaseButton").onclick = function(){
    count--;
    document.getElementById("display").textContent= count;
};

document.getElementById("IncreaseButton").onclick = function(){
    count++;
    document.getElementById("display").textContent= count;
};
document.getElementById("ResetButton").onclick = function(){
    count=0;
    document.getElementById("display").textContent= count;
};*/


const decrease=document.getElementById("decreaseButton");
const increase=document.getElementById("IncreaseButton");
const reset=document.getElementById("ResetButton");

let dis=document.getElementById("display");
count=0;

decrease.onclick=function(){
    count--;
    dis.textContent= count;
}

increase.onclick=function(){
    count++;
    dis.textContent= count;
}

reset.onclick=function(){
    count=0;
    dis.textContent= count;
}