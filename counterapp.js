let count=0
let countDisplay= document.getElementById("count");
let incrementbtn= document.getElementById("increment");
let decrementbtn= document.getElementById("decrement");
let resetbtn= document.getElementById("reset");
let msg= document.getElementById("msg")
incrementbtn.addEventListener("click", function(){
    count++;
    countDisplay.innerText=count;
    msg.innerText="";
    updateColor();
});

decrementbtn.addEventListener("click",function(){
    if(count>0){
    count--;
    countDisplay.innerText=count;
    msg.innerText="";
    }else{
        msg.innerText="count can't be less than 0"
    }
    updateColor();

});
resetbtn.addEventListener("click",function(){
    count=0;
    countDisplay.innerText=count;
    msg.innerText="";
    updateColor();
});
incrementbtn.addEventListener("mouseover",function(){
    incrementbtn.innerText="+"
});
incrementbtn.addEventListener("mouseout",function(){
    incrementbtn.innerText="increment"
});
decrementbtn.addEventListener("mouseover",function(){
    decrementbtn.innerText="-"
});
decrementbtn.addEventListener("mouseout",function(){
    decrementbtn.innerText="decrement"
});



function updateDisplay() {
    document.getElementById("count").innerText = count;
}

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") {
        count++;
    }

    else if (event.key === "ArrowDown") {
        if (count > 0) {
            count--;
        }
    }

    else if (event.key.toLowerCase() === "r") {
        count = 0;
    }

    updateDisplay();
    updateColor();
});

function decrement() {
    count = Math.max(0, count - 1);
    updateDisplay();
}


function updateColor(){

    if (count === 0) {
        countDisplay.style.color = "gray";
    }

    else if (count <= 10) {
        countDisplay.style.color = "green";
    }

    else if (count <= 50) {
        countDisplay.style.color = "orange";
    }

    else {
        countDisplay.style.color = "red";
    }
}
