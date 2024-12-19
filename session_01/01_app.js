const addDivBtn=document.getElementById('addDivBtn');
const addPBtn=document.getElementById('addPBtn');
const addSpanBtn=document.getElementById('addSpanBtn');
const container=document.getElementById("container");
const container2=document.getElementById("container_2");
const addPBtn2=document.getElementById("addPBtn2");


//function to add div
function addDiv(){
    const newDiv=document.createElement('div');
    newDiv.textContent='This is a dynamically added Div';
    newDiv.style.backgroundColor="#e3f2fd";
    container.appendChild(newDiv);

}
addDivBtn.addEventListener('click',addDiv);

//function to add paragraph
function addParagraph(){
    const newParagraph=document.createElement('p');
    newParagraph.textContent="This is a dynamically added paragraph";
    container.appendChild(newParagraph);
}
addPBtn.addEventListener('click',addParagraph);

//function to add span
function addSpan(){
    const newSpan=document.createElement('span');
    newSpan.textContent="This is a dynamically added Span";
    container.appendChild(newSpan);
}
addSpanBtn.addEventListener('click',addSpan);

//function to add another paragraph inside container2
function addParagraph2(){
    const addParagraph2InaDiv=document.createElement('p');
    addParagraph2InaDiv.textContent="It's another paragraph";
    container2.appendChild(addParagraph2InaDiv);
}
addPBtn2.addEventListener('click',addParagraph2);