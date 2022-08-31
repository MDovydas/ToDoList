

function addTask(event) {
    event.preventDefault()
    let newTaskText = document.getElementById("addField").value;
    let tasks = document.getElementById("mainContainer");
    let array = Array.from(tasks.children);
    const ids = array.map(element => {
        return element.id;
    });
    let i = 0;
    while (ids.includes("task" + i)){
        i++;
    }
    let div = document.createElement("div");
    div.setAttribute("id", "task" + i);
    let p = document.createElement("p");
    let text = document.createTextNode(newTaskText);
    p.appendChild(text);
    let button = document.createElement("button");
    button.setAttribute("id", "button");
    button.classList.add("material-symbols-outlined");
    let bText = document.createTextNode("delete");
    button.appendChild(bText);
    button.setAttribute("onclick", "this.parentNode.parentNode.removeChild(this.parentNode);")
    div.appendChild(p);
    div.appendChild(button);
    tasks.appendChild(div);
}

function search(){
    let text = document.getElementById("searchField").value;
    let mc = document.getElementById("mainContainer");
    console.log(mc);
    let array = Array.from(mc.children);
    console.log(array);
    const ids = array.map(element => {
        return element.id;
    });
    console.log(ids);
    for (let i = 0; i < ids.length; i++){
        console.log(ids[i]);
        let iDiv = document.getElementById(ids[i]);
        console.log(iDiv)
        let iDivChild = iDiv.querySelector("p");
        console.log(iDivChild);
        console.log(iDivChild.innerText);
        document.getElementById(ids[i]).hidden = !iDivChild.innerText.includes(text);
    }
}

let addButton = document.getElementById("addButton");
let addField = document.getElementById("addField");
addButton.addEventListener("click", addTask);
addField.addEventListener("submit", addTask);
let searchField = document.getElementById("searchField");
searchField.addEventListener("input", search)
