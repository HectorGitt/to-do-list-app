var listItems = document.getElementById("list");
var add = document.getElementById("add");
var typed = document.getElementsByTagName("input");
var removebut = document.getElementById("remove");
var count = Object.keys(localStorage).length
//Event
function append(){
    var todo = document.createElement('li')
    if (typed[0].value != ''){
        todo.innerHTML = '<h3>'+ typed[0].value +'</h3><button id="remove" type="button">X</button>';
        listItems.appendChild(todo);
        typed[0].value = '';
        todoItem = list.innerHTML;
        localStorage.setItem("todo", JSON.stringify(todoItem));

    }

}
add.addEventListener("click", append);


function clear(e){
    if (e.target.id === 'remove'){
        if (confirm("Are you Sure")){
            var todo = e.target.parentElement;
            todoItem = e.target.parentElement.getElementsByTagName("h3")[0].innerText
            listItems.removeChild(todo);
            todoItem = list.innerHTML;
            localStorage.setItem("todo", JSON.stringify(todoItem));

        }
    }
}
addEventListener("click", clear);
function getItems() {
    var items = JSON.parse(localStorage.getItem("todo"));
    listItems.innerHTML = items;
}
getItems();
