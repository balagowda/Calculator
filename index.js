/*let disp = document.getElementById("disp");
buttons = document.querySelectorAll("button");
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='='){
            disp.value = eval(screenValue);
        }
        else if(buttonText=='C'){
            screenValue = '';
            disp.value = screenValue;
        }
        else{
            screenValue+=buttonText;
            disp.value=screenValue;
        }
    })
}*/


let total='';
function fin(total){
    var a = document.getElementById('disp'),massage;
    massage = total;
    a.innerHTML=massage;
}

function dis(val){
    total+=val;  
    fin(total);
}

function Ans(ans){
    var d = document.getElementById('sup'),massage;
    massage = ans;
    d.innerHTML=massage;
}

function ttl(){
   c = eval(total);
   fin(total);
   Ans(c);
}

function clr(){
    total = '';
    fin(total);
    Ans(total);
}

