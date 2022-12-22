const userInput = document.getElementById("user_input");
const addButton = document.getElementById("addButton");
const clearAllButton = document.getElementById("clearAllButton");
var itemsContainer = document.getElementById("items_container");


const addItems = ()=>{
    var listItem = createElements()
    eventHandler(listItem)
    disableClearButton()
    addButton.innerHTML = '<i class="fa-solid fa-plus addBtn"></i>'
    userInput.value = ""
    addButton.disabled = true
    
}


const createElements = () => {

    // Creating li items
    var listNode = document.createElement("li");
    listNode.classList.add("items");
    itemsContainer.prepend(listNode)


    // creating text-box
    var span = document.createElement("span")
    span.innerText = userInput.value
    listNode.appendChild(span)
    
    // creating edit button
    var editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    listNode.appendChild(editButton)

    // Creating Delete Button
    var trashButton = document.createElement("button");
    trashButton.classList.add("trashButton");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    listNode.appendChild(trashButton)

    return listNode;

}

const deleteFn = function () {
    const li = this.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li)
    disableClearButton()
}

const editFn = function (){
    const li = this.parentNode;
    const span = li.querySelector("span");
    addButton.innerHTML = '<i class="fa-solid fa-rotate-right updateBtn"></i>';
    userInput.value = span.innerText;

    const ul = li.parentNode;
    ul.removeChild(li)
    addButton.disabled = false
    
}
const clearAllFn = function(){
    const li = itemsContainer.querySelectorAll(".items");
    for(let i=0; i<li.length; i++){
        itemsContainer.removeChild(li[i])
    }
    disableClearButton()
}
const disableClearButton = function(){
    const li = itemsContainer.childNodes;
    if(li.length > 1 ){
        clearAllButton.disabled = false
    }
    else{
        clearAllButton.disabled = true
    }  
}

const completeButton = function (){
    const li = this
    li.classList.toggle("checkItem")
}


const eventHandler = (listItem)=>{
    const delButton = listItem.querySelector(".trashButton");
    delButton.onclick = deleteFn;

    const editButton = listItem.querySelector(".editButton");
    editButton.onclick = editFn;

    const completeBtn = listItem
    completeBtn.onclick = completeButton
}
const disableInputButton = function(){
    if(userInput.value.length < 2){
        addButton.disabled = true
    }
    else{
        addButton.disabled = false
        
    }
}
userInput.addEventListener("keyup", (e)=>{
    disableInputButton();
    if(e.key === "Enter" && addButton.disabled === false){
        addItems();
        addButton.disabled = true
    }    
})

clearAllButton.addEventListener("click", clearAllFn)
addButton.addEventListener("click", addItems);
