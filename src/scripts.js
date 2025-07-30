const grupo = document.getElementById("grupo");


function agregar(){
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    
    
    let tarea = document.getElementById("input").value;
    if (tarea != ""){
        li.innerHTML = `${tarea}<button type="button" class="btn btn-danger" onclick="eliminar(this)">Eliminar</button>`;
        grupo.appendChild(li);
    
        document.getElementById("input").value = "";
    }


    
}

function eliminar(boton){
    let li = boton.parentElement;
    li.remove();

}

function menu(){
    let menu = document.getElementById("menu")
    menu.classList.toggle("mostrar")
}

