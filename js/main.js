var listItems = document.getElementById("list");
var add = document.getElementById("add");
var typed = document.getElementsByTagName("input");
var removebut = document.getElementById("remove");
//Event
function append(){
    var todo = document.createElement('li')
    if (typed[0].value != ''){
        todo.innerHTML = '<h3>'+ typed[0].value +'</h3><button id="remove" type="button">X</button>';
        listItems.appendChild(todo);
        typed[0].value = '';
    }

}
add.addEventListener("click", append);


function clear(e){
    if (e.target.id === 'remove'){
        if (confirm("Are you Sure")){
            var todo = e.target.parentElement;
            listItems.removeChild(todo);

        }
    }
}
addEventListener("click", clear);