
function add(){
    let input=document.getElementById("input")
    let box=document.querySelector(".box")
    let listitem=document.createElement("li")
    let button=document.getElementById("button")
    listitem.innerHTML=input.value + "<button onclick=\"del(event)\">Delete</button>"
    input.value=""
    listitem.style.backgroundColor="white"
    listitem.style.height="max-content"
    listitem.style.marginBottom="20px"
    listitem.style.marginRight="20px"
    listitem.style.marginLeft="-10px"
    
    box.appendChild(listitem)
    }
function del(event){
    event.target.parentElement.remove()

}