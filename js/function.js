var arrTareas = [{
        id: 0,
        titulo: 'Yoga',
        descripcion: 'De 18.30h - 19.30h una hora de deporte',
        tipo: 'diaria'
    },
    {
        id: 1,
        titulo: 'Ir a comprar',
        descripcion: 'Ir al mercadona y comprar: aceite, ajos, tomates',
        tipo: 'semanal'
    },
    {
        id: 2,
        titulo: 'Salir a pasear',
        descripcion: 'Un buen paseo de 1 hora, recomendable para la circulacion',
        tipo: 'diaria'
    },

    {
        id: 3,
        titulo: ' Cita Dentista',
        descripcion: ' Lunes dia 8 de junio a las 17.00 h revision en el dentista',
        tipo: 'puntual'
    },

    {
        id: 4,
        titulo: ' 2 Cita Dentista',
        descripcion: ' Lunes dia 8 de junio a las 17.00 h revision en el dentista',
        tipo: 'mensual'
    }
];

var idTarea = arrTareas.length;



function pintarTareas(listaTareas) {
    limpiarPantalla();
    for (var i = 0; i < listaTareas.length; i++) {
        document.getElementById('tareas').innerHTML += `<div class="col-4 ${listaTareas[i].tipo}"><p id="titulo">${listaTareas[i].titulo}</p><p id="descripcion">${listaTareas[i].descripcion}</p><button class="borrar" onclick="eliminarTarea(${listaTareas[i].id})">Eliminar</button></div>`;
    }
}

function agregarTarea() {
    var id = idTarea;
    idTarea++;
    var t1 = document.getElementById('titulo').value;
    var d1 = document.getElementById('descripcion').value;
    var tipo = document.getElementById('tipo').value;

    var tarea = { id: id, titulo: t1, descripcion: d1, tipo: tipo };

    arrTareas.push(tarea);
    pintarTareas(arrTareas);
}


function eliminarTarea(pId) {
    for (var i = 0; i < arrTareas.length; i++) {
        if (arrTareas[i].id == pId) {
            arrTareas.splice(i, 1);
            console.log(arrTareas);
            pintarTareas(arrTareas);
        }
    }
}


function limpiarPantalla() {
    document.getElementById('tareas').innerHTML = '';
}

function filtrarTarea() {
    var tipoTarea = document.getElementById('filtro').value;
    var listaTareaFiltrada = [];

    if (tipoTarea == 'todas') {
        pintarTareas(arrTareas);
    } else {
        for (tarea of arrTareas) {
            if (tarea.tipo == tipoTarea)
                listaTareaFiltrada.push(tarea);
        }
        pintarTareas(listaTareaFiltrada);
    }
}

document.getElementById('filtro').addEventListener('change', filtrarTarea);


function buscarTarea() {
    var palabra = document.getElementById('search').value.toLocaleLowerCase();
    var resultadoBusqueda = [];

    for (let i = 0; i < arrTareas.length; i++) {
        if (arrTareas[i].titulo.toLocaleLowerCase().includes(palabra) || arrTareas[i].descripcion.toLocaleLowerCase().includes(palabra)) {
            resultadoBusqueda.push(arrTareas[i]);
        }

    }
    if (resultadoBusqueda.length == 0) {
        limpiarPantalla();
        document.getElementById('tareas').innerHTML += `<div class="col-4"><p>No hay ninguna tarea con esos datos</p></div>`;
    } else {
        pintarTareas(resultadoBusqueda);

    }




}