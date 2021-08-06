const input=document.querySelector("input");
const button=document.querySelector("button");
const ul=document.querySelector("ul");
let toBeCompleted=`<i class="far fa-square completed"></i>`
let deleteIcon=`<i class="fas fa-times delete"></i>`


function addToList(event){
    let li=document.createElement("li");
    ul.appendChild(li);   
    li.innerHTML=`${event.target.value} <span>${toBeCompleted}${deleteIcon}</span>`;
    input.value=""
}

function deleteAdd(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove()
    }
    if(e.target.classList.contains("completed")){
        e.target.classList.toggle("fa-square")
        e.target.classList.toggle("fa-check-square")
    }
}

input.addEventListener("change", addToList)
ul.addEventListener("click",deleteAdd)