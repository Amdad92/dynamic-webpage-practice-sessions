const myList=document.getElementById("myList");
const addButton=document.getElementById("addButton");
const itemInput=document.getElementById("itemInput");
addButton.addEventListener("click",function(){
const itemText=itemInput.value.trim();
if(itemText!==""){
    const newItem=document.createElement("li");
    newItem.textContent=itemText;
    myList.appendChild(newItem);
    itemInput.value="";
}else{
    alert("please enter an item name");
}


});

