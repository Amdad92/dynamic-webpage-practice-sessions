const changeTextBtn=document.getElementById("changeTextBtn");
const changeHTMLBtn=document.getElementById("changeHTMLBtn");
const changeAttrBtn=document.getElementById("changeAttrBtn");
const container=document.getElementById("container");

const para1=document.getElementById("para1");
const div1=document.getElementById("div1");

// Function to change text content using innerText
function changeTextContent(){
    para1.innerText='This is the updated text using innerText!'
    div1.innerText='This is the updated div text using innerText!';
}
changeTextBtn.addEventListener("click",changeTextContent);

//function to change HTML content using innerHTML
function changeInnerHTML(){
    para1.innerHTML="This text is <span>changed</span> using innerHTML";
    div1.innerHTML="Create a new div add a new paragraph here.<div><h1>Amdad</h1></div>" 
}
changeHTMLBtn.addEventListener("click",changeInnerHTML);

// Function to change attributes using setAttribute
function changeAttributes(){
    div1.setAttribute('class','box-updated');
    div1.setAttribute('title','This is a dynamically updated title attribute!');
}
changeAttrBtn.addEventListener('click',changeAttributes);