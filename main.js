let form = document.querySelector("form")
let input = document.querySelector("input")
let listGroup = document.querySelector("ul")


form.addEventListener("submit" , saveTodo)


function saveTodo(e){

    e.preventDefault()
   
    let newTodo = document.createElement("li")
     newTodo.innerText = input.value
   
    newTodo.className = "collection-item"
   
    let delBtn = document.createElement("button")
    delBtn.innerText = "X"
    delBtn.className = "btn waves-effect waves-light red darken-3"
    newTodo.appendChild(delBtn)
    listGroup.appendChild(newTodo)

    // Reset Form
    
    form.reset()

}



listGroup.addEventListener("click" , deleteTodo)

function deleteTodo(e){


    if(e.target.className.includes("red")){
        
        let todo = e.target.parentElement 
        listGroup.removeChild(todo)
    }
    
}


