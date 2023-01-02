const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const displayText = document.getElementById("displayText");
const resetBtn = document.getElementById("reset")


window.onload = ()=>{
    disabledReset()

}
let count = 0
displayText.innerText = count
incrementBtn.addEventListener("click", ()=>{
    count++;
    displayText.innerText = count
    disabledReset();
})

decrementBtn.addEventListener("click", ()=>{
    if(count > 0){
        count--;
    }
    else{
        count = 0
    }
    displayText.innerText = count
    disabledReset();

})
resetBtn.addEventListener("click", ()=>{
    
    count = 0
    displayText.innerText = count
    disabledReset()
})

function disabledReset(){
    if(count === 0){
        resetBtn.disabled = true
        decrementBtn.disabled = true
    }  
    else{
        resetBtn.disabled = false
        decrementBtn.disabled = false
    }
}